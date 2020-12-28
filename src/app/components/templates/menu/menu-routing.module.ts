import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRutasGuard } from "src/app/services/login/guards/auth-rutas.guard";
import { RoleGuard } from "src/app/services/login/guards/role.guard";
import { ListEvaluadorComponent } from "../../evaluador/list-evaluador/list-evaluador.component";
import { ListinformesComponent } from "../../informes/listinformes/listinformes.component";
import { ListInstrumentoComponent } from "../../instrumento/list-instrumento/list-instrumento.component";
import { HomeComponent } from "../home/home.component";
import { ListarCursoComponent } from '../../curso/listar-curso/listar-curso.component';
import { ListarPlanComponent } from '../../plan/listar-plan/listar-plan.component';
import { ListarPlancursoComponent } from '../../plancurso/listar-plancurso/listar-plancurso.component';

export const routes: Routes = [
  { path: 'listinforme', component: ListinformesComponent, data: { role: ['ADMIN'], id: 3 } },
  { path: 'instrumento', component: ListInstrumentoComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN'] } },
  { path: 'listevaluador', component: ListEvaluadorComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN'] } },
  { path: 'evaluacion', component: HomeComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN'] } },
  { path: 'informes', component: HomeComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN'] } },
  { path: 'rubricas', component: HomeComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: ['ADMIN'] } },
  { path: 'listar-curso', component: ListarCursoComponent },
  { path: 'listar-plan', component: ListarPlanComponent },
  { path: 'listar-plancurso', component: ListarPlancursoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

