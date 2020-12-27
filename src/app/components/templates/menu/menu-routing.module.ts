import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRutasGuard } from "src/app/services/login/guards/auth-rutas.guard";
import { RoleGuard } from "src/app/services/login/guards/role.guard";
import { ListEvaluadorComponent } from "../../evaluador/list-evaluador/list-evaluador.component";
import { ListinformesComponent } from "../../informes/listinformes/listinformes.component";
import { HomeComponent } from "../home/home.component";
import { AlternativaInstrumentoComponent } from "../../instrumento/alternativa-instrumento/alternativa-instrumento.component";
import { CreateInstrumentoComponent } from "../../instrumento/create-instrumento/create-instrumento.component";
import { DetailInstrumentoComponent } from "../../instrumento/detail-instrumento/detail-instrumento.component";
import { ResultadosComponent } from '../../resultados/resultados.component';







export const routes: Routes = [
  {path: 'instrumento/create', component:CreateInstrumentoComponent,canActivate:[AuthRutasGuard, RoleGuard],  data: { role: ['ADMIN','evaluador'] } },
  { path: 'listinforme', component: ListinformesComponent, data: { role: ['ADMIN'], id: 3 } },
  

  {path: 'listevaluador', component: ListEvaluadorComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] } },
  {path: 'instrumento/:id',component:DetailInstrumentoComponent,canActivate:[AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] }},
  // {path: 'instrumento/:id/alternativa/:id', component: AlternativaInstrumentoComponent,canActivate:[AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] }},
  {path: 'resultados', component:ResultadosComponent,canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] }},

  { path: 'evaluacion', component: HomeComponent },
  { path: 'informes', component: HomeComponent },
  { path: 'rubricas', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

