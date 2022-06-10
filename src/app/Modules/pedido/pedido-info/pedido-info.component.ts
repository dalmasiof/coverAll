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
    this.pedido.statusEntrega = 'Delivered';
    let pedidoToUpdate = Object.assign({}, this.pedido);
    pedidoToUpdate.produtos = [];
    pedidoToUpdate.statusEntrega = 'Order Delivered';
    pedidoToUpdate.statusPagamento = 'Paid Order';
    pedidoToUpdate.statusPedido = "Order Completed";

    this.pedidoSvc.Update(pedidoToUpdate).subscribe((x) => {
      this.toastSvc.success('Order changed successfully');
      this.pedido.statusEntrega = pedidoToUpdate.statusEntrega;
      this.pedido.statusPagamento = pedidoToUpdate.statusPagamento;
      this.pedido.statusPedido = pedidoToUpdate.statusPedido;
      this.localStorageSvc.setValue('pedido',this.pedido)


    },
    (err)=>{
      this.toastSvc.error("Error updating order, status"+err.status,"Error")
    }); 
  }

  onBtnCancelarPedido(){
    this.pedido.statusEntrega = 'Canceled order';
    let pedidoToUpdate = Object.assign({}, this.pedido);
    pedidoToUpdate.produtos = [];
    pedidoToUpdate.statusEntrega = 'Canceled order';
    pedidoToUpdate.statusPagamento = 'Canceled order';
    pedidoToUpdate.statusPedido = "Canceled order";

    this.pedidoSvc.Update(pedidoToUpdate).subscribe((x) => {
      this.toastSvc.success('Order changed successfully');
      this.pedido.statusEntrega = pedidoToUpdate.statusEntrega;
      this.pedido.statusPagamento = pedidoToUpdate.statusPagamento;
      this.pedido.statusPedido = pedidoToUpdate.statusPedido;
      this.localStorageSvc.setValue('pedido',this.pedido)

    },
    (err)=>{
      this.toastSvc.error("Error updating order, status"+err.status,"Error")
    }); 
  }
}
