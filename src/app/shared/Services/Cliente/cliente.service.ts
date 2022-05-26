import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente_Url } from 'src/app/core/const/urls/Cliente_Urls';
import { Cliente } from 'src/app/core/model/Cliente';
import { HttpService } from 'src/app/core/services/http.service';
import { IBaseService } from '../Interface/IBaseService';

@Injectable()
export class ClienteService implements IBaseService<Cliente> {
  url: string;
  constructor(private httpSvc: HttpService<Cliente>) {
    this.url = Cliente_Url.BASE;
  }

  GetList(): Observable<Cliente[]> {
    return this.httpSvc.GetList(this.url);
  }
  GetById(Id: number): Observable<Cliente> {
    return this.httpSvc.GetById(Id, this.url);
  }
  Filter(objFilter: Cliente): Observable<Cliente[]> {
    return this.httpSvc.Filter(objFilter, this.url);
  }
  Create(toCreate: Cliente): Observable<Cliente> {
    return this.httpSvc.Create(toCreate, this.url);
  }
  Update(toUpdate: Cliente): Observable<Cliente> {
    return this.httpSvc.Update(toUpdate, this.url);
  }
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(Id, this.url);
  }
  GetPedidosPorCliente(IdCLiente: number) {
    return this.httpSvc.GetPedidosByCli(IdCLiente,this.url+Cliente_Url.PEDIDOS_BY_CLIENTE);
  }
}
