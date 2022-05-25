import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido_Urls } from 'src/app/core/const/urls/Pedido_Urls';
import { Pedido } from 'src/app/core/model/Pedido';
import { HttpService } from 'src/app/core/services/http.service';
import { IBaseService } from '../Interface/IBaseService';

@Injectable()
export class PedidoService implements IBaseService<Pedido> {
  url: string;

  constructor(private httpSvc: HttpService<Pedido>) {
    this.url = Pedido_Urls.BASE;
  }
  GetList(): Observable<Pedido[]> {
    return this.httpSvc.GetList(this.url);
  }
  GetById(Id: number): Observable<Pedido> {
    return this.httpSvc.GetById(Id, this.url);
  }
  Filter(objFilter: Pedido): Observable<Pedido[]> {
    return this.httpSvc.Filter(objFilter, this.url);
  }
  Create(toCreate: Pedido): Observable<Pedido> {
    return this.httpSvc.Create(toCreate, this.url);
  }
  Update(toUpdate: Pedido): Observable<Pedido> {
    return this.httpSvc.Update(toUpdate, this.url);
  }
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(Id, this.url);
  }
}
