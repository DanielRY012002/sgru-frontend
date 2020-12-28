import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from 'src/app//models/plan/plan';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization':`bearer ${sessionStorage.token}`});
  planUrl = Global.url + 'planes';
  constructor(private http: HttpClient) { }
  getPlanes():Observable<Plan[]>{
    return this.http.get<Plan[]>(this.planUrl+'/all', {headers:this.httpHeaders});
  }
  getPlan(id:number):Observable<Object> {
    return this.http.get(`${this.planUrl}/${id}`, {headers:this.httpHeaders});
  }
  addPlan(plan:Plan): Observable<number>{
    return this.http.post<number>(this.planUrl+"/add", plan, {headers:this.httpHeaders});
  }

  deletePlan(id:number): Observable<number>{
    return this.http.delete<number>(this.planUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updatePlan(plan: Plan):Observable<number>{
    return this.http.put<number>(`${this.planUrl}/update/${plan.plan_id}`, plan,{headers:this.httpHeaders});
  }

  getPlanes1():Observable<Object[]>{
    return this.http.get<Object[]>(this.planUrl+'/all2',{headers:this.httpHeaders});
  }
  getCampus():Observable<Object[]>{
    return this.http.get<Object[]>(this.planUrl+'/campus', {headers:this.httpHeaders});
  }
  getFacultades(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.planUrl}/facultad/${id}`, {headers:this.httpHeaders});
  }
  getPa(id:number):Observable<Object[]>{
    return this.http.get<Object[]>(`${this.planUrl}/pa/${id}`, {headers:this.httpHeaders});
  }
}
