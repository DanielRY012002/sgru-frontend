import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/login/usuario/usuario';
import { AuthService } from 'src/app/services/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario=new Usuario();
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      Swal.fire('Login',`Hola ${this.authService.usuario.username} ya estas autenticado!`,'info');
      this.router.navigate(['']);
    }
  }

  login(){
    if(this.usuario.username==null || this.usuario.password==null){
      Swal.fire('Error Login', 'Username o password vacías!', 'error');
      return;
    }
    this.authService.login(this.usuario).subscribe(response =>{
      console.log(response);
      this.authService.guadarUser(response.access_token);
      this.authService.guadarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/dashboard']);    
      Swal.fire('Login', `Hola ${usuario.username}, has iniciado sesion con éxito`, 'success');
    },err =>{
      if(err.status==400){
        Swal.fire('Error Login', 'Username o password incorrectos!', 'error');
      }
    });
  }

}
