import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/login/usuario/usuario';
import { AuthService } from 'src/app/services/login/auth.service';
import { FormControl, NgForm, Validators,  FormBuilder, FormGroup, FormGroupDirective  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFormGroup= this._formBuilder.group({
    username:['', Validators.required],
    password: ['', Validators.required],
  });



  loading: boolean = false;
  hide = true;

  usuario: Usuario = new Usuario();
  constructor(private authService: AuthService, private router: Router, private tost: ToastrService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.verifAuth();
  }

  login(form) {
    this.usuario.username = form.value.username;
    this.usuario.password = form.value.password;
    if (this.usuario.username == null || this.usuario.password == null) {
      this.tost.error('Campos de Usuario y/o contraseña vacios', 'Error', { positionClass: 'toast-bottom-right' });
      return;
    }
    this.loading = true;
    this.authService.login(this.usuario).subscribe(response => {
      this.authService.guadarUser(response.access_token);
      this.authService.guadarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/dashboard']);
      this.loading = false;
      this.tost.success('Inicio de sesion con exito', `${usuario.username}`, { positionClass: 'toast-bottom-right' })
    }, err => {
      if (err.status == 400) {
        this.tost.error('Usuario y/o contraseña incorrectos', 'Error',{ positionClass: 'toast-bottom-right' } );
      }
      if (err.status == 401) {
        this.loading = false;
        this.tost.error('Intente mas tarde', `El sistema no esta disponible`, { positionClass: 'toast-bottom-right' })
      }
    });
  }

  verifAuth(): void {
    if (this.authService.isAuthenticated()) {
      this.tost.info('Ya estas autenticado', `${this.authService.usuario.username}`, { positionClass: 'toast-bottom-right' })
      this.router.navigate(['dashboard']);
    }
  }

  saveUser():void{

  }

  getErrorMessage(field:string){
    let message;
    if(this.loginFormGroup.get(field).errors.required){
      message = "Necesitas llenar este campo";
    }
    return message;
  }
  isValidField(field:string):boolean{
      return ( (this.loginFormGroup.get(field).touched || this.loginFormGroup.get(field).dirty ) 
      && !this.loginFormGroup.get(field).valid
      
  )};

}
