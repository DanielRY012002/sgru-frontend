import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';
import { Pregunta } from '../../models/instrumento/pregunta';


@Injectable({
    providedIn: 'root'
})
export class PreguntaService{
    public url:string;


    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    getPreguntas(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'pregunta/' + id,{headers:headers} );
    }
    getPregunta(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'pregunta/detail/' + id, {headers:headers});   
    }
    
    createPregunta(pregunta:Pregunta):Observable<any>{
        let params = JSON.stringify(pregunta);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url + 'pregunta',params,{headers:headers});
    }


    updatePregunta(pregunta:Pregunta):Observable<any>{
        let params = JSON.stringify(pregunta);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'pregunta/'+pregunta.pregunta_id,params,{headers:headers});
    }
    deletePregunta(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.delete(this.url+'pregunta/'+id,{headers:headers});
    }

}