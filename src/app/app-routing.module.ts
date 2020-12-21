import { Routes } from '@angular/router';
import { LoginComponent } from './components/templates/login/login.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { NotfoundComponent } from './components/templates/notfound/notfound.component';
import { AuthRutasGuard } from './services/login/guards/auth-rutas.guard';
export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MenuComponent, children: [
      { path: '', loadChildren:()=> import('./components/templates/menu/menu.module').then(mod=>mod.MenuModule)  }
    ]
  },
  {path:'**', component:NotfoundComponent}
];
