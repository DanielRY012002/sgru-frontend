import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialmodule/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './components/templates/menu/menu.component';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { AddEvaluadorComponent } from './components/evaluador/add-evaluador/add-evaluador.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component';
import { ListHabilidadesComponent } from './components/evaluador/list-habilidades/list-habilidades.component';
import { ListExpertosComponent } from './components/evaluador/list-expertos/list-expertos.component';
import { ListExternosComponent } from './components/evaluador/list-externos/list-externos.component';
import { ListDocentesComponent } from './components/evaluador/list-docentes/list-docentes.component';
import { LoginComponent } from './components/templates/login/login.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';
import { EvaluacionComponent } from './components/cards/evaluacion/evaluacion.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcardsComponent,
    ListEvaluadorComponent,
    AddEvaluadorComponent,
    ListInstrumentoComponent,
    ListHabilidadesComponent,
    ListExpertosComponent,
    ListExternosComponent,
    ListDocentesComponent,
    LoginComponent,
    NotfoundComponent,
    EvaluacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
