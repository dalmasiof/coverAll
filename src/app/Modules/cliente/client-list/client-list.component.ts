import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/core/model/Cliente';
import { ClienteService } from 'src/app/shared/Services/Cliente/cliente.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome','sobrenome', 'cpf', 'email','acoes'];
  dataSource = new MatTableDataSource<Cliente>([]);

  clientList:Cliente[]=[]


  constructor(private clienteSvc:ClienteService) { }

  ngOnInit(): void {
    this.getClieteLIst()
  }

  getClieteLIst(){
    this.clienteSvc.GetList().subscribe((x)=>{
      this.carregarLista(x)
    })
  }
  carregarLista(x: Cliente[]) {
    this.clientList = x;
    this.dataSource = new MatTableDataSource<Cliente>(this.clientList);
  }


}
