import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../global';



@Injectable({
    providedIn: 'root'
  })
export class SemestreService {
    public url:string;

    constructor(
        private _http:HttpClient
    )
    {
        this.url = Global.url;
    }
    getSemestres():Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'semestre',{headers:headers});

    }
}