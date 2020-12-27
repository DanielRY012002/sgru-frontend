import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';



@Injectable({
    providedIn: 'root'
})
export class ResultadoService{
    public url:string;


    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    getEstudiantes():Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'resultado/estudiante',{headers:headers});
    }
    getConf_py(nombre:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'resultado/'+nombre ,{headers:headers});
    }
    getConf_eva(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'resultado/conf_eva/'+id ,{headers:headers});
    }
}