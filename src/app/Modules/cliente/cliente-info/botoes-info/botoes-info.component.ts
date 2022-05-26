import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botoes-info',
  templateUrl: './botoes-info.component.html',
  styleUrls: ['./botoes-info.component.scss']
})
export class BotoesInfoComponent implements OnInit {
  @Output() btnCLick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  obBtnClick(value:string){
    this.btnCLick.emit(value)
  }

}
