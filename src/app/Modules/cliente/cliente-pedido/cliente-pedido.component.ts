import { Component, OnInit } from '@angular/core';
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
  pedidosCLiente!: Pedido[];
  cliente!: Cliente;

  constructor(
    private clienteSvc: ClienteService,
    private localStorageSvc: LocalStorageService
  ) {
    this.cliente = this.localStorageSvc.getValue('cliente');
    this.getPedidos();
  }
  ngOnInit(): void {}

  getPedidos() {
    this.clienteSvc.GetPedidosPorCliente(this.cliente.id).subscribe((x) => {
      this.pedidosCLiente = x;
    });
  }
}
