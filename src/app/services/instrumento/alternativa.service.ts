import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';
import { Alternativa } from '../../models/instrumento/alternativa';


@Injectable({
    providedIn: 'root'
})
export class AlternativaService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
    getAlternativas(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'alternativa/'+id,{headers:headers});
    }
    createAlternativa(alternativa:Alternativa):Observable<any>{
        let params = JSON.stringify(alternativa);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.post(this.url+'alternativa',params,{headers:headers});
    }
    updateAlternativa(alternativa:Alternativa):Observable<any>{
        let params = JSON.stringify(alternativa);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.put(this.url+'alternativa/'+alternativa.alternativa_id,params,{headers:headers});
    }
    deleteAlternativa(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.delete(this.url+'alternativa/'+id,{headers:headers});
    }
}