import { Injectable } from '@angular/core';
import { NgBrDirectives } from 'ng-brazil';

@Injectable()
export class FormataDadosAPIService {
  constructor() {}

  moedaParaAPI(valor: string): number {
    //de "total": "R$ 80,50", para "total": "80.50"
    let valorNum = parseFloat(valor.replace('R$ ', '').replace(',', '.'));
    return valorNum;
  }

  moedaParaVisu(valor: number): string {
    //de "total": "80.50", para "total": "R$ 80,50"
    const { CURRENCYPipe } = NgBrDirectives;
    return new CURRENCYPipe().transform(valor, '2');
  }
}
