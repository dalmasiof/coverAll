import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto_Urls } from 'src/app/core/const/urls/Produto_Urls';
import { Produto } from 'src/app/core/model/Produto';
import { HttpService } from 'src/app/core/services/http.service';
import { IBaseService } from '../Interface/IBaseService';

@Injectable()
export class ProdutoService implements IBaseService<Produto> {
  url: string;

  constructor(private httpSvc: HttpService<Produto>) {
    this.url = Produto_Urls.BASE;
  }
  GetList(): Observable<Produto[]> {
    return this.httpSvc.GetList(this.url);
  }
  GetById(Id: number): Observable<Produto> {
    return this.httpSvc.GetById(Id, this.url);
  }
  Filter(objFilter: Produto): Observable<Produto[]> {
    return this.httpSvc.Filter(objFilter, this.url);
  }
  Create(toCreate: Produto): Observable<Produto> {
    return this.httpSvc.Create(toCreate, this.url);
  }
  Update(toUpdate: Produto): Observable<Produto> {
    return this.httpSvc.Update(toUpdate, this.url);
  }
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(Id, this.url);
  }
}
