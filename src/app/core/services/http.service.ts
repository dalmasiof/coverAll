import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBaseRequest } from '../interface/IBaseRequest';
import { Cliente } from '../model/Cliente';
import { Login } from '../model/Login';
import { PayLoadCep } from '../model/payLoadCep';

@Injectable()
export class HttpService<T> {

  baseUrl:string | undefined

  constructor(private httpSvc:HttpClient) {
    this.baseUrl = environment.baseURL
   }

  GetList(path:string): Observable<T[]> {
    return this.httpSvc.get<T[]>(this.baseUrl+path);
  }
  GetById(Id: number,path:string): Observable<T> {
    path += "/"+Id.toString();
    return this.httpSvc.get<T>(this.baseUrl+path);
  }
  Filter(objFilter: T,path:string): Observable<T[]> {
    return this.httpSvc.post<T[]>(this.baseUrl+path,objFilter);
  }
  Create(toCreate: T,path:string): Observable<T> {
    return this.httpSvc.post<T>(this.baseUrl+path,toCreate);
  }
  Update(toUpdate: T,path:string): Observable<T> {
    return this.httpSvc.put<T>(this.baseUrl+path,toUpdate);
  }
  Delete(Id: number,path:string): Observable<boolean> {
    path += "/"+Id.toString();
    return this.httpSvc.delete<boolean>(this.baseUrl+path);
  }
  Auth(toCreate: Login,path:string): Observable<Cliente> {
    return this.httpSvc.post<Cliente>(this.baseUrl+path,toCreate);
  }

  GetCep(cep:string){
    return this.httpSvc.get<PayLoadCep>(`https://viacep.com.br/ws/${cep}/json/`);

  }

}
