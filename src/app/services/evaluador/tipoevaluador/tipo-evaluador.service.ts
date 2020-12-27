import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoEvaluador } from 'src/app/models/evaluador/tipoevaluador/tipo-evaluador';
import { Global } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class TipoEvaluadorService {
  urlTipoEvaluador = Global.url + 'tipoevaluador';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':`bearer ${sessionStorage.token}`});

  constructor(private http: HttpClient) { }

  getTipoEvaluadores(): Observable<TipoEvaluador[]> {
    return this.http.get<TipoEvaluador[]>(this.urlTipoEvaluador + '/all',{headers:this.httpHeaders});
  }
}
