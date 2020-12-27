import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialmodule/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
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



import { InterceptorErrorService } from './services/login/interceptores/interceptor-error.service';
import { InterceptorService } from './services/login/interceptores/interceptor.service';


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
    HttpClientModule,
    FlexLayoutModule,
    ToastrModule.forRoot()
    ],
  providers: [RolService,AuthService,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
