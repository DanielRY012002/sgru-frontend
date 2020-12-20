import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from './app.component';
import { EvaluacionComponent } from './components/cards/evaluacion/evaluacion.component';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { ListinformesComponent } from './components/informes/listinformes/listinformes.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component';
import { LoginComponent } from './components/templates/login/login.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';
import { Login } from './models/login/login';
import { AuthRutasGuard } from './services/login/guards/auth-rutas.guard';
import { RoleGuard } from './services/login/guards/role.guard';

const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthRutasGuard], data: { role: 'ADMIN' } },
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'evaluacion', component: EvaluacionComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'listinforme', component: ListinformesComponent, data: { role: 'ADMIN' } },
  { path: 'dashboard', component: DashboardComponent, data: { role: 'ADMIN' } },
  { path: 'instrumento', component: ListInstrumentoComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'listevaluador', component: ListEvaluadorComponent, canActivate: [AuthRutasGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'informes', component: ListcardsComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
