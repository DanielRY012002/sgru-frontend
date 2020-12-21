import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcardsComponent } from '../../cards/listcards/listcards.component';
import { ListEvaluadorComponent } from '../../evaluador/list-evaluador/list-evaluador.component';
import { AddEvaluadorComponent } from '../../evaluador/add-evaluador/add-evaluador.component';
import { ListInstrumentoComponent } from '../../instrumento/list-instrumento/list-instrumento.component';
import { ListHabilidadesComponent } from '../../evaluador/list-habilidades/list-habilidades.component';
import { ListExpertosComponent } from '../../evaluador/list-expertos/list-expertos.component';
import { ListExternosComponent } from '../../evaluador/list-externos/list-externos.component';
import { ListDocentesComponent } from '../../evaluador/list-docentes/list-docentes.component';
import { EvaluacionComponent } from '../../cards/evaluacion/evaluacion.component';

import { RouterModule } from '@angular/router';
import {MenuRoutes} from './menu-routing.module'
import { MaterialModule } from 'src/app/materialmodule/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/login/auth.service';
import { RolService } from 'src/app/services/login/roles/rol.service';
import { ListinformesComponent } from '../../informes/listinformes/listinformes.component';
import { InformesiComponent } from '../../informes/informesi/informesi.component';
import { InformesgComponent } from '../../informes/informesg/informesg.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';



@NgModule({
  declarations: [
    ListcardsComponent,
    ListEvaluadorComponent,
    AddEvaluadorComponent,
    ListInstrumentoComponent,
    ListHabilidadesComponent,
    ListExpertosComponent,
    ListExternosComponent,
    ListDocentesComponent,
    EvaluacionComponent,
    ListinformesComponent,
    DashboardComponent,
    InformesiComponent,
    InformesgComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MenuRoutes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule
    ],
  providers:[RolService,AuthService]
})
export class MenuModule {}
