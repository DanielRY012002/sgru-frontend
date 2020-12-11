import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../../global';
import { Acceso } from 'src/app/models/login/acceso/acceso';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  urlAcceso = `${Global.url}acceso`;
  constructor(private http: HttpClient) { }

  getMainRoutes():Observable<Acceso[]>{
      return this.http.get<Acceso[]>( `${this.urlAcceso}/main`);
  }
  getSubMainRoutes(id:number):Observable<Acceso[]>{
    return this.http.get<Acceso[]>( `${this.urlAcceso}/submain/${id}`);
}
}
