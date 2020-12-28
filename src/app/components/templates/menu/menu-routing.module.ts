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
import { ListCompetenciaComponent } from '../../competencia/list-competencia/list-competencia.component';
import {ListCompLineaComponent} from '../../competencia-linea/list-comp-linea/list-comp-linea.component';
import {RubricasComponent} from '../../rubricas/rubricas.component';
import {AddRubricasComponent} from '../../rubricas/add-rubricas/add-rubricas.component';
import  {CriteriosComponent} from '../../rubricas/criterios/criterios.component';
import { NivelesLogroComponent } from '../../rubricas/niveles-logro/niveles-logro.component';

export const routes: Routes = [
  {path: 'instrumento/create', component:CreateInstrumentoComponent,canActivate:[AuthRutasGuard, RoleGuard],  data: { role: ['ADMIN','evaluador'] } },
  { path: 'listinforme', component: ListinformesComponent, data: { role: ['ADMIN'], id: 3 } },
  

  {path: 'listevaluador', component: ListEvaluadorComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] } },
  {path: 'instrumento/:id',component:DetailInstrumentoComponent,canActivate:[AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] }},
  // {path: 'instrumento/:id/alternativa/:id', component: AlternativaInstrumentoComponent,canActivate:[AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] }},
  {path: 'resultados', component:ResultadosComponent,canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN','evaluador'] }},
  {path: 'rubricas', component: RubricasComponent},
  {path: 'addrubricas/:id', component: AddRubricasComponent},
  {path: 'rubricas/indicador/:id', component: CriteriosComponent},
  {path: 'rubricas/indicador/nivellogro/:id', component: NivelesLogroComponent},
  {path: 'competencias', component: ListCompetenciaComponent},
  {path: 'lis-comp-linea', component: ListCompLineaComponent},

  { path: 'evaluacion', component: HomeComponent },
  { path: 'informes', component: HomeComponent },
  { path: 'rubricas', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

