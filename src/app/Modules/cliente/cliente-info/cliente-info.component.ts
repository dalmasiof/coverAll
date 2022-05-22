import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/model/Cliente';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.scss']
})
export class ClienteInfoComponent implements OnInit {
  cliente!: Cliente;

  constructor(private localStorageSvc:LocalStorageService) {
    this.cliente = this.localStorageSvc.getValue('cliente')
   }


  ngOnInit(): void {
    console.log(this.cliente);
  }

}
