import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRutasGuard } from "src/app/services/login/guards/auth-rutas.guard";
import { RoleGuard } from "src/app/services/login/guards/role.guard";
import { EvaluacionComponent } from "../../cards/evaluacion/evaluacion.component";
import { ListcardsComponent } from "../../cards/listcards/listcards.component";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { ListEvaluadorComponent } from "../../evaluador/list-evaluador/list-evaluador.component";
import { ListinformesComponent } from "../../informes/listinformes/listinformes.component";
import { ListInstrumentoComponent } from "../../instrumento/list-instrumento/list-instrumento.component";

export const routes: Routes = [
  { path: 'evaluacion', component: EvaluacionComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: 'ADMIN' ,id:2} },
  { path: 'listinforme', component: ListinformesComponent, data: { role: 'ADMIN' } },
  { path: 'dashboard', component: DashboardComponent, data: { role: 'ADMIN' } },
  { path: 'instrumento', component: ListInstrumentoComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'listevaluador', component: ListEvaluadorComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'informes', component: ListcardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule{}

