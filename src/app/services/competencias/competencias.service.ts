import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competencias, Competencia_Linea } from 'src/app/models/competencias/competencias';


@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private competenciaUrl:string='https://proyecto-sisgeep.herokuapp.com/api/competencias';//endpoint
  private tipocompetenciaUrl:string='https://proyecto-sisgeep.herokuapp.com/api/tipo_competencia';
  private planesUrl:string='https://proyecto-sisgeep.herokuapp.com/api/planes';
  private linepaUrl:string='https://proyecto-sisgeep.herokuapp.com/lineapa';
  private complinepaUrl:string='https://proyecto-sisgeep.herokuapp.com/api/competencia_lineas';
  
  constructor(private http: HttpClient) { }

  getCompetencias():Observable<Competencias[]>{
    return this.http.get<Competencias[]>(this.competenciaUrl+'/all'); 
  }
  getCompetencia(id:number):Observable<Object>{
    return this.http.get(`${this.competenciaUrl}/${id}`); 
  }
  addCompetencia(competencia: Competencias): Observable<number>{
    return this.http.post<number>(this.competenciaUrl+"/add", competencia, {headers:this.httpHeaders});
  }
  deleteCompetencia(id: number): Observable<number>{
    return this.http.delete<number>(this.competenciaUrl+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateCompetencia(competencia: Competencias):Observable<number> {
    return this.http.put<number>(`${this.competenciaUrl}/update/${competencia.competencias_id}`, competencia, {headers:this.httpHeaders});
  }
    gettipoCompetencias():Observable<Object[]>{
    return this.http.get<Object[]>(this.tipocompetenciaUrl+'/all'); 
  }
  
  getplan():Observable<Object[]>{
    return this.http.get<Object[]>(this.planesUrl+'/all'); 
  }
  getlineapa():Observable<Object[]>{
    return this.http.get<Object[]>(this.linepaUrl+'/all'); 
  }

  getComplineas():Observable<Object[]>{
    return this.http.get<Object[]>(this.complinepaUrl+'/all'); 
  }
  getComplinea(id:number):Observable<Object>{
    return this.http.get(`${this.complinepaUrl}/${id}`); 
  }
  addComplinea(competencia_Linea: Competencia_Linea): Observable<number>{
    return this.http.post<number>(this.complinepaUrl+"/add", competencia_Linea, {headers:this.httpHeaders});
  }
  deleteComplinea(id: number): Observable<number>{
    return this.http.delete<number>(this.complinepaUrl+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateComplinea(competencia_Linea: Competencia_Linea):Observable<number> {
    return this.http.put<number>(`${this.complinepaUrl}/update/${competencia_Linea.cl_id}`, Competencia_Linea, {headers:this.httpHeaders});
  }


}
