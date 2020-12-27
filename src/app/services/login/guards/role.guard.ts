import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private tost: ToastrService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let role = next.data['role'] as string;
    for (let r of role) {
      if (this.authService.hasRole(r)) {
        return true;
      }
    }
    this.tost.error('No tienes acceso a este recurso', `Error de acceso`,{ positionClass: 'toast-bottom-right'});
    this.router.navigate(['']);
    return false;
  }

}
