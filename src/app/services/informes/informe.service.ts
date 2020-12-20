import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informe } from 'src/app/models/informes/informe';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class InformeService {
  urlInforme:string=`${Global.url}informe`;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':`bearer ${sessionStorage.token}`});
  constructor(private http:HttpClient) { }

  getInformesGenerales(id:number,id2:number):Observable<Informe[]>{
    return this.http.get<Informe[]>(`${this.urlInforme}/${id}/${id2}`,{headers:this.httpHeaders});
  }
  getInformesIndividuales(id:number,id2:number,id3:number):Observable<any>{
    return this.http.get<Informe[]>(`${this.urlInforme}/${id}/${id2}/${id3}`,{headers:this.httpHeaders})
  }
  getInformesUAC():Observable<Object[]>{
    return this.http.get<Object[]>(`${this.urlInforme}/uac`,{headers:this.httpHeaders});
  }
  getInformesUAF(n:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.urlInforme}/uaf/${n}`,{headers:this.httpHeaders});
  }
  getInformesUAPA(n:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.urlInforme}/uapa/${n}`,{headers:this.httpHeaders});
  }
}
