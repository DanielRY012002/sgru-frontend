import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso/curso';
import { Global } from '../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':`bearer ${sessionStorage.token}`});
  cursoUrl = Global.url + 'cursos';
  constructor(private http: HttpClient) { }
  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.cursoUrl+'/all', {headers:this.httpHeaders});
  }
  getCurso(id:number):Observable<Object> {
    return this.http.get(`${this.cursoUrl}/${id}`);
  }
  addCurso(curso:Curso): Observable<number>{
    return this.http.post<number>(this.cursoUrl+"/add", curso, {headers:this.httpHeaders});
  }

  deleteCurso(id:number): Observable<number>{
    return this.http.delete<number>(this.cursoUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateCurso(curso: Curso):Observable<number>{
    return this.http.put<number>(`${this.cursoUrl}/update/${curso.curso_id}`, curso,{headers:this.httpHeaders});
  }
}
