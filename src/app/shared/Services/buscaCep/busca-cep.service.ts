import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PayLoadCep } from 'src/app/core/model/payLoadCep';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class BuscaCepService {

  constructor(private httpSvc:HttpService<PayLoadCep>) {


   }

   getCep(cep:string):Observable<PayLoadCep>{
     return this.httpSvc.GetCep(cep);  
   }
}
