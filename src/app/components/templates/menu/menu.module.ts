import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEvaluadorComponent } from '../../evaluador/list-evaluador/list-evaluador.component';
import { AddEvaluadorComponent } from '../../evaluador/add-evaluador/add-evaluador.component';
import { ListInstrumentoComponent } from '../../instrumento/list-instrumento/list-instrumento.component';
import { ListHabilidadesComponent } from '../../evaluador/list-habilidades/list-habilidades.component';
import { ListExpertosComponent } from '../../evaluador/list-expertos/list-expertos.component';
import { ListExternosComponent } from '../../evaluador/list-externos/list-externos.component';
import { ListDocentesComponent } from '../../evaluador/list-docentes/list-docentes.component';
import { MenuRoutingModule } from './menu-routing.module'
import { MaterialModule } from 'src/app/materialmodule/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/login/auth.service';
import { RolService } from 'src/app/services/login/roles/rol.service';
import { ListinformesComponent } from '../../informes/listinformes/listinformes.component';
import { InformesiComponent } from '../../informes/informesi/informesi.component';
import { InformesgComponent } from '../../informes/informesg/informesg.component';
import { AddCursoComponent } from '../../curso/add-curso/add-curso.component';
import { ListarCursoComponent } from '../../curso/listar-curso/listar-curso.component';
import { UpdateCursoComponent } from '../../curso/update-curso/update-curso.component';
import { AddPlanComponent } from '../../plan/add-plan/add-plan.component';
import { ListarPlanComponent } from '../../plan/listar-plan/listar-plan.component';
import { UpdatePlanComponent } from '../../plan/update-plan/update-plan.component';
import { AddPlancursoComponent } from '../../plancurso/add-plancurso/add-plancurso.component';
import { ListarPlancursoComponent } from '../../plancurso/listar-plancurso/listar-plancurso.component';
import { UpdatePlancursoComponent } from '../../plancurso/update-plancurso/update-plancurso.component';

@NgModule({
  declarations: [
    ListEvaluadorComponent,
    AddEvaluadorComponent,
    ListInstrumentoComponent,
    ListHabilidadesComponent,
    ListExpertosComponent,
    ListExternosComponent,
    ListDocentesComponent,
    ListinformesComponent,
    InformesiComponent,
    InformesgComponent,
    AddCursoComponent,
    ListarCursoComponent,
    UpdateCursoComponent,
    AddPlanComponent,
    ListarPlanComponent,
    UpdatePlanComponent,
    AddPlancursoComponent,
    ListarPlancursoComponent,
    UpdatePlancursoComponent,
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
  providers: [RolService, AuthService]
})
export class MenuModule { }
