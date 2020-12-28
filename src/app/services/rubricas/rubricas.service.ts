import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criterio } from 'src/app/models/rubricas/criterios';
import { Cursos } from 'src/app/models/rubricas/cursos';
import { Docente } from 'src/app/models/rubricas/docentes';
import { Nivellogro } from 'src/app/models/rubricas/nivellogro';
import { Proyectos } from 'src/app/models/rubricas/proyectos';
import { Rubricas } from 'src/app/models/rubricas/rubricas';
import { Semestre } from 'src/app/models/rubricas/semestre';


@Injectable({
  providedIn: 'root'
})
export class RubricasService {
  selectedRubri: Rubricas;
  rubrica: Rubricas[];
  curso: Cursos[];
  docente: Docente[];
  semestre: Semestre[];
  proyecto: Proyectos[];
  criterio: Criterio[];
  niveles : Nivellogro[];
  selectedCriterio : Criterio;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  // esta ruto deveria estar en los environments
  // utilizen un solo formato de comillas '' o ""   
  private url: string = 'https://proyecto-integrador-2020.herokuapp.com/api/'
  
  constructor(private http: HttpClient) { 
    this.selectedRubri = new Rubricas();
    this.selectedCriterio = new Criterio();
  }

  getSemestre(): Observable<Semestre[]> {
    //Control de errores
    return this.http.get<Semestre[]>(this.url + "semestre", { headers: this.httpHeaders });
  }

  getProyectos(id: number): Observable<any> {
    return this.http.get<Proyectos[]>(this.url + "proyecto/" + id);
  }

  getCurso(id: number): Observable<any> {
    return this.http.get<Cursos[]>(this.url + "proyecto/curso/" + id);
  }

  getRubrica(id: number): Observable<any> {
    return this.http.get<Rubricas[]>(this.url + "rubrica/" + id);
  }

  postRubrica(rubri: Rubricas) {
    return this.http.post(this.url + 'rubrica', rubri, { headers: this.httpHeaders });
  }

  deleterubrica(id:number):Observable<number>{
    return this.http.delete<number>(this.url+"/delete/"+id,{headers:this.httpHeaders});
  }
  updaterubrica(rubricas:Rubricas): Observable<number>{
    return this.http.put<number>(`${this.url}/update/${rubricas.py_carga_id}`, rubricas, 
    {headers:this.httpHeaders});
  }

  getIndicador(id: number): Observable<any> {
    return this.http.get<Criterio[]>(this.url + "rubrica/indicador/" + id);
  }

  getIndicadores(id: number): Observable<any> {
    return this.http.get<Criterio[]>(this.url + "rubrica/indicadores/" + id);
  }

  postIndicadores(criterio : Criterio){
    return this.http.post(this.url + 'rubrica/indicador', criterio, { headers: this.httpHeaders });
  }
  
  getNivel(id:number) : Observable<any>{
    return this.http.get<Criterio[]>(this.url + "rubrica/niveles_logro/indicador/" + id);
  }

  getNivelesLogro() : Observable<any>{
    return this.http.get<Nivellogro[]>(this.url + "rubrica/niveles_logro",  { headers: this.httpHeaders });
  }

  getAllNivelLogro(id: number) : Observable<any>{
    return this.http.get<Nivellogro[]>(this.url + "rubrica/nivel_rubrica/" + id);
  }

  getAllAdministrator(id1:string, id2 : string) : Observable<any>{
      return this.http.get<any>(this.url + "rubrica/admin/" + id1 + "/" + id2);
  }

  getAllInfo(id : number) : Observable<any>{
      return this.http.get<any>(this.url + "/proyecto/union/" + id ,  { headers: this.httpHeaders });
  }

}