import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  getValue(valor: string):any {
    let objValue = Object.assign({}, localStorage.getItem(valor));
    return objValue;
  }

  setValue(propriedade: string, valor: any):boolean {
    try {
      localStorage.setItem(propriedade, JSON.stringify(valor));
      return true;
    } catch (error) {
      return false;
    }
  }
}
