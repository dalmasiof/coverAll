import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/core/model/Pedido';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { PedidoService } from 'src/app/shared/Services/Pedido/pedido.service';

@Component({
  selector: 'app-pedido-info',
  templateUrl: './pedido-info.component.html',
  styleUrls: ['./pedido-info.component.scss'],
})
export class PedidoInfoComponent implements OnInit {
  pedido!: Pedido;
  constructor(
    private pedidoSvc: PedidoService,
    private localStorageSvc: LocalStorageService,
    private toastSvc: ToastrService
  ) {
    this.pedido = this.localStorageSvc.getValue('pedido');
  }

  ngOnInit(): void {}

  onBtnConfirmaEntrega() {
    this.pedido.statusEntrega = 'Entregue';
    let pedidoToUpdate = Object.assign({}, this.pedido);
    pedidoToUpdate.produtos = [];
    pedidoToUpdate.statusEntrega = 'Pedido Entregue';
    pedidoToUpdate.statusPagamento = 'Pedido Pago';
    pedidoToUpdate.statusPedido = "Pedido Finalizado";

    this.pedidoSvc.Update(pedidoToUpdate).subscribe((x) => {
      this.toastSvc.success('Pedido alterado com sucesso');
      this.pedido.statusEntrega = pedidoToUpdate.statusEntrega;
      this.pedido.statusPagamento = pedidoToUpdate.statusPagamento;
      this.pedido.statusPedido = pedidoToUpdate.statusPedido;

    },
    (err)=>{
      this.toastSvc.error("Erro ao atualizar o pedido, status"+err.status,"Erro")
    }); 
  }

  onBtnCancelarPedido(){
    this.pedido.statusEntrega = 'Pedido Cancelado';
    let pedidoToUpdate = Object.assign({}, this.pedido);
    pedidoToUpdate.produtos = [];
    pedidoToUpdate.statusEntrega = 'Pedido Cancelado';
    pedidoToUpdate.statusPagamento = 'Pedido Cancelado';
    pedidoToUpdate.statusPedido = "Pedido Cancelado";

    this.pedidoSvc.Update(pedidoToUpdate).subscribe((x) => {
      this.toastSvc.success('Pedido alterado com sucesso');
      this.pedido.statusEntrega = pedidoToUpdate.statusEntrega;
      this.pedido.statusPagamento = pedidoToUpdate.statusPagamento;
      this.pedido.statusPedido = pedidoToUpdate.statusPedido;

    },
    (err)=>{
      this.toastSvc.error("Erro ao atualizar o pedido, status"+err.status,"Erro")
    }); 
  }
}
