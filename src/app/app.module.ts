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
import { FlexLayoutModule } from '@angular/flex-layout';
import { RolService } from './services/login/roles/rol.service';
import { AuthService } from './services/login/auth.service';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';
import { LoginComponent } from './components/templates/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { HomeComponent } from './components/templates/home/home.component';
import { AddPlanComponent } from './components/plan/add-plan/add-plan.component';
import { UpdatePlanComponent } from './components/plan/update-plan/update-plan.component';
import { AddPlancursoComponent } from './components/plancurso/add-plancurso/add-plancurso.component';
import { UpdatePlancursoComponent } from './components/plancurso/update-plancurso/update-plancurso.component';
import { AddCursoComponent } from './components/curso/add-curso/add-curso.component';
import { UpdateCursoComponent } from './components/curso/update-curso/update-curso.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotfoundComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatDialogModule,
    HttpClientModule,
    FlexLayoutModule,
    ToastrModule.forRoot()
    ],
    entryComponents:[AddPlanComponent, UpdatePlanComponent, AddPlancursoComponent, UpdatePlancursoComponent, AddCursoComponent, UpdateCursoComponent],
  providers: [RolService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
