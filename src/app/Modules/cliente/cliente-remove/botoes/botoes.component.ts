import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss'],
})
export class BotoesComponent implements OnInit {
  @Output() remove: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  btnClick(param:string) {
    this.remove.emit(param);
  }


}
