import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { LoginComponent } from './components/templates/login/login.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';
import { AuthRutasGuard } from './services/login/guards/auth-rutas.guard';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MenuComponent, canActivate:[AuthRutasGuard],children: [
      { path: '', loadChildren:()=> import('./components/templates/menu/menu.module').then(mod=>mod.MenuModule)  }
    ]
  },
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthRutasGuard]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

