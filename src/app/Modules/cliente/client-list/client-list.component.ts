import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/core/model/Cliente';
import { ClienteService } from 'src/app/shared/Services/Cliente/cliente.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ClienteRemoveComponent } from '../cliente-remove/cliente-remove.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome','sobrenome', 'cpf', 'email','acoes'];
  dataSource = new MatTableDataSource<Cliente>([]);

  clientList:Cliente[]=[]


  constructor(private clienteSvc:ClienteService, private router:Router, private locaStorageSvc:LocalStorageService, private MatDialog:MatDialog) { }

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

  btnInfoClick(Id:number){
      this.clienteSvc.GetById(Id).subscribe((x)=>{
      this.locaStorageSvc.setValue('cliente',x);
      this.router.navigateByUrl('/cliente')
    })
  }

  btnUpdateClick(Id:number){
    this.clienteSvc.GetById(Id).subscribe((x)=>{
      this.locaStorageSvc.setValue('cliente',x);
      this.router.navigateByUrl('/cliente/update')
    })
  }

  btnRemoveClick(Id:number){
    debugger
    this.clienteSvc.GetById(Id).subscribe((x)=>{
      this.locaStorageSvc.setValue('cliente',x);
      this.MatDialog.open(ClienteRemoveComponent).
      afterClosed().subscribe((y)=>{
        debugger
        let cliente = this.locaStorageSvc.getValue('cliente');

        if(cliente.nome == 'removed'){
          this.clientList =  this.clientList.filter((y)=>
            y.id != Id
          )
          this.carregarLista(this.clientList)

        }

      })
    })

  }


}
