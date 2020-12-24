import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/login/usuario/usuario';
import { AuthService } from 'src/app/services/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading:boolean=false;
  usuario: Usuario = new Usuario();
  constructor(private authService: AuthService, private router: Router, private tost: ToastrService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.tost.info('Ya estas autenticado', `${this.authService.usuario.username}`, { positionClass: 'toast-bottom-right' })
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    if (this.usuario.username == null || this.usuario.password == null) {
      Swal.fire('Error Login', 'Username o password vacías!', 'error');
      return;
    }
    this.loading=true;
    this.authService.login(this.usuario).subscribe(response => {
      this.authService.guadarUser(response.access_token);
      this.authService.guadarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/dashboard']);
      this.loading=false;
      this.tost.success('Inicio de sesion con exito', `${usuario.username}`, { positionClass: 'toast-bottom-right' })
    }, err => {
      if (err.status == 400) {
        Swal.fire('Error Login', 'Username o password incorrectos!', 'error');
      }
      if(err.status==401){
        this.loading=false;
        this.tost.error('Intente mas tarde', `El sistema no esta disponible`, { positionClass: 'toast-bottom-right' })
      }
    });
  }

}
