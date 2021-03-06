import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEvaluadorComponent } from '../../evaluador/list-evaluador/list-evaluador.component';
import { AddEvaluadorComponent } from '../../evaluador/add-evaluador/add-evaluador.component';
import { ListHabilidadesComponent } from '../../evaluador/list-habilidades/list-habilidades.component';
import { ListExpertosComponent } from '../../evaluador/list-expertos/list-expertos.component';
import { ListExternosComponent } from '../../evaluador/list-externos/list-externos.component';
import { ListDocentesComponent } from '../../evaluador/list-docentes/list-docentes.component';
import { MenuRoutingModule } from './menu-routing.module'
import { MaterialModule } from 'src/app/materialmodule/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/login/auth.service';
import { RolService } from 'src/app/services/login/roles/rol.service';
import { ListinformesComponent } from '../../informes/listinformes/listinformes.component';
import { InformesiComponent } from '../../informes/informesi/informesi.component';
import { InformesgComponent } from '../../informes/informesg/informesg.component';

import { CreateInstrumentoComponent } from '../../instrumento/create-instrumento/create-instrumento.component';
import { AlternativaInstrumentoComponent } from '../../instrumento/alternativa-instrumento/alternativa-instrumento.component';
import { DetailInstrumentoComponent } from '../../instrumento/detail-instrumento/detail-instrumento.component';
import { PreguntaInstrumentoComponent } from '../../instrumento/pregunta-instrumento/pregunta-instrumento.component';
import { ResultadosComponent } from '../../resultados/resultados.component';
import {  ListCompetenciaComponent } from '../../competencia/list-competencia/list-competencia.component';
import {  AddCompetenciaComponent } from '../../competencia/add-competencia/add-competencia.component';
import { UpdateCompetenciaComponent  } from '../../competencia/update-competencia/update-competencia.component';
import {ListCompLineaComponent} from '../../competencia-linea/list-comp-linea/list-comp-linea.component';
import {AddCompLineaComponent} from '../../competencia-linea/add-comp-linea/add-comp-linea.component';
import {UpdateCompLineaComponent} from '../../competencia-linea/update-comp-linea/update-comp-linea.component';
import {RubricasComponent} from '../../rubricas/rubricas.component';
import {AddRubricasComponent} from '../../rubricas/add-rubricas/add-rubricas.component';
import {CardProjectComponent} from '../../rubricas/card-project/card-project.component';
import {VistaAdministrativaComponent} from '../../rubricas/vista-administrativa/vista-administrativa.component';
import {CriteriosComponent} from '../../rubricas/criterios/criterios.component';
import {NivelesLogroComponent} from '../../rubricas/niveles-logro/niveles-logro.component';
import  {RegistroRubricaComponent} from '../../rubricas/registro-rubrica/registro-rubrica.component';
import { InterceptorErrorService } from '../../../services/login/interceptores/interceptor-error.service';
import { InterceptorService } from '../../../services/login/interceptores/interceptor.service';

@NgModule({
  declarations: [
    ListEvaluadorComponent,
    AddEvaluadorComponent,
    ListHabilidadesComponent,
    ListExpertosComponent,
    ListExternosComponent,
    ListDocentesComponent,
    ListinformesComponent,
    InformesiComponent,
    InformesgComponent,
    CreateInstrumentoComponent,
    AlternativaInstrumentoComponent,
    DetailInstrumentoComponent,
    PreguntaInstrumentoComponent,
    ResultadosComponent,
    AddCompetenciaComponent,
    UpdateCompetenciaComponent,
    ListCompetenciaComponent,
    ListCompLineaComponent,
    AddCompLineaComponent,
    UpdateCompLineaComponent,
    RubricasComponent,
    CardProjectComponent,
    AddRubricasComponent,
    CriteriosComponent,
    NivelesLogroComponent,
    VistaAdministrativaComponent,
    RegistroRubricaComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RolService, AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorErrorService,
    multi:true
  }
],


})
export class MenuModule { }
