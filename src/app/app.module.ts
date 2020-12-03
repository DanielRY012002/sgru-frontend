import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialmodule/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import{LayoutModule} from '@angular/cdk/layout';
import { MenuComponent } from './components/templates/menu/menu.component';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { AddEvaluadorComponent } from './components/evaluador/add-evaluador/add-evaluador.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcardsComponent,
    ListEvaluadorComponent,
    AddEvaluadorComponent,
    ListInstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
