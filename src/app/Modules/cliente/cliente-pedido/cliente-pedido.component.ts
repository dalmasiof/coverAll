import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/core/model/Cliente';
import { Pedido } from 'src/app/core/model/Pedido';
import { ClienteService } from 'src/app/shared/Services/Cliente/cliente.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-cliente-pedido',
  templateUrl: './cliente-pedido.component.html',
  styleUrls: ['./cliente-pedido.component.scss'],
})
export class ClientePedidoComponent implements OnInit {
  isLoading:boolean = true
  pedidosCLiente: Pedido[] = [];
  cliente!: Cliente;

  constructor(
    private clienteSvc: ClienteService,
    private localStorageSvc: LocalStorageService,
    private route:Router
  ) {
    this.cliente = this.localStorageSvc.getValue('cliente');
    this.getPedidos();
  }
  ngOnInit(): void {}

  getPedidos() {
    this.clienteSvc.GetPedidosPorCliente(this.cliente.id).subscribe((x) => {
      this.pedidosCLiente = x;
      this.isLoading = false
    });
  }

  onBtnMaisClick(pedido:Pedido){
    this.localStorageSvc.setValue('pedido',pedido);

    this.route.navigateByUrl('pedido/info')
  }
}
