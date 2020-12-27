import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';
import { Instrumento } from '../../models/instrumento/instrumento';
import { NumberInput } from '@angular/cdk/coercion';

@Injectable({
    providedIn: 'root'
})
export class InstrumentoService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    createInstrumento(instrumento : Instrumento):Observable<any>{
        let params = JSON.stringify(instrumento);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'instrumento',params,{headers:headers});        
    }
    getInstrumentosxsem(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'instrumento/sem/'+id,{headers:headers});
    }
    getInstrumento(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'instrumento/'+id,{headers:headers}); 
    }

    updateInstrumento(instrumento:Instrumento):Observable<any>{
        let params = JSON.stringify(instrumento);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'instrumento/'+instrumento.instrumento_id ,params,{headers:headers})
    }
    deleteInstrumento(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'instrumento/'+id,{headers:headers});
    }
}