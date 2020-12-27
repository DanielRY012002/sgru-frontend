import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';


@Injectable({
    providedIn: 'root'
})
export class CompetenciasService {
    public url:string;

    constructor(
        private _http:HttpClient

    ){
        this.url = Global.url;
    }

    getCompetencias(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'competencia_linea/'+id,{headers:headers});
    }
}