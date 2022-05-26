import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-base',
  templateUrl: './cliente-base.component.html',
  styleUrls: ['./cliente-base.component.scss']
})
export class ClienteBaseComponent implements OnInit {

  controleComponente:string="1"
  constructor() { }

  ngOnInit(): void {
  }

  outPutButton(value:string){
    this.controleComponente = value
  }

}
