import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component';

const routes: Routes = [
  { path: 'instrumento', component: ListInstrumentoComponent },
  { path: 'listevaluador', component: ListEvaluadorComponent },
  { path: 'listcards', component: ListcardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
