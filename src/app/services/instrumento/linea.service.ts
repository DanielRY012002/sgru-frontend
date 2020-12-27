import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';

@Injectable({
    providedIn: 'root'
})
export class LineaService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
    getLinea(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'lineas_plan/'+id,{headers:headers});    
    }
}
