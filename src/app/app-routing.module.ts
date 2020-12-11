import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { EvaluacionComponent } from './components/cards/evaluacion/evaluacion.component';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component';
import { LoginComponent } from './components/templates/login/login.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';

const routes: Routes = [
  { path: 'instrumento', component: ListInstrumentoComponent },
  { path: 'listevaluador', component: ListEvaluadorComponent },
  { path: 'informes', component: ListcardsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'evaluacion', component:EvaluacionComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
