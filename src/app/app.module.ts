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
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotfoundComponent,
    LoginComponent
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
  providers: [RolService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
