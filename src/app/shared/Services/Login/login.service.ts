import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login_Url } from 'src/app/core/const/urls/Login_Url';
import { Cliente } from 'src/app/core/model/Cliente';
import { Login } from 'src/app/core/model/Login';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { IBaseService } from '../Interface/IBaseService';


@Injectable()
export class LoginService implements IBaseService<Login> {
  url:string
  constructor(private httpSvc: HttpService<Login>) {
    this.url = Login_Url.BASE
  }
  GetList(): Observable<Login[]> {
    return this.httpSvc.GetList(this.url);
  }
  GetById(Id: number): Observable<Login> {
    return this.httpSvc.GetById(Id,this.url);
  }
  Filter(objFilter: Login): Observable<Login[]> {
    return this.httpSvc.Filter(objFilter,this.url);
  }
  Create(toCreate: Login): Observable<Login> {
    return this.httpSvc.Create(toCreate,this.url);
  }
  Update(toUpdate: Login): Observable<Login> {
    return this.httpSvc.Update(toUpdate,this.url);
  }
  Delete(Id: number): Observable<boolean> {
    return this.httpSvc.Delete(Id,this.url);
  }

  Auth(objLogin: Login):Observable<Cliente> {
    debugger
    this.url = Login_Url.BASE+Login_Url.AUTH;
    return this.httpSvc.Auth(objLogin,this.url);
  }
}
