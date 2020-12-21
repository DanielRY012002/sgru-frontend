import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoCivil } from 'src/app/models/evaluador/estadocivil/estado-civil';
import { Global } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {
  urlEstadoCivil = Global.url + 'estadocivil';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':`bearer ${sessionStorage.token}`});

  constructor(private http: HttpClient) { }

  getEstadoCivil(): Observable<EstadoCivil[]> {
    return this.http.get<EstadoCivil[]>(this.urlEstadoCivil + '/all',{headers:this.httpHeaders});
  }
}
