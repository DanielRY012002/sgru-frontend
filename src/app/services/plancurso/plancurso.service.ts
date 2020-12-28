import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plancurso } from 'src/app/models/plancurso/plancurso';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class PlancursoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':`bearer ${sessionStorage.token}`});
  plancursoUrl = Global.url + 'planescursos';
  constructor(private http: HttpClient) { }
  getPlanescursos():Observable<Plancurso[]>{
    return this.http.get<Plancurso[]>(this.plancursoUrl+'/all', {headers:this.httpHeaders});
  }
  getPlancurso(id:number):Observable<Object> {
    return this.http.get(`${this.plancursoUrl}/${id}`, {headers:this.httpHeaders});
  }
  addPlancurso(plancurso:Plancurso): Observable<number>{
    return this.http.post<number>(this.plancursoUrl+"/add", plancurso, {headers:this.httpHeaders});
  }

  deletePlancurso(id:number): Observable<number>{
    return this.http.delete<number>(this.plancursoUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updatePlancurso(plancurso:Plancurso):Observable<number>{
    return this.http.put<number>(`${this.plancursoUrl}/update/${plancurso.plan_curso_id}`, plancurso,{headers:this.httpHeaders});
  }

  getPlanescursos1():Observable<Object[]>{
    return this.http.get<Object[]>(this.plancursoUrl+'/all2' , {headers:this.httpHeaders});
  }

  getCursos():Observable<Object[]>{
    return this.http.get<Object[]>(this.plancursoUrl+'/cur', {headers:this.httpHeaders});
  }

  getPlanes2():Observable<Object[]>{
    return this.http.get<Object[]>(this.plancursoUrl+'/pl', {headers:this.httpHeaders});
  }
  getCiclo():Observable<Object[]>{
    return this.http.get<Object[]>(this.plancursoUrl+'/ci', {headers:this.httpHeaders});
  }
  getCampus():Observable<Object[]>{
    return this.http.get<Object[]>(this.plancursoUrl+'/campus', {headers:this.httpHeaders});
  }
  getFacultades(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.plancursoUrl}/facultad/${id}`, {headers:this.httpHeaders});
  }
  getPa(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.plancursoUrl}/pa/${id}`, {headers:this.httpHeaders});
  }
  getPlanes3(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.plancursoUrl}/plan/${id}`, {headers:this.httpHeaders});
  }
}
