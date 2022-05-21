import { Observable } from "rxjs";
import { IBaseRequest } from "src/app/core/interface/IBaseRequest";

export interface IBaseService<T> {
    GetList():Observable<T[]>
    GetById(Id:number):Observable<T>
    Filter(objFilter:T):Observable<T[]>

    Create(toCreate:T):Observable<T>
    Update(toUpdate:T):Observable<T>
    Delete(Id:number):Observable<boolean>
}