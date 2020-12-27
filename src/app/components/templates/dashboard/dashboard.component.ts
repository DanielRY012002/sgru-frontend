import { Component, OnInit } from '@angular/core';
import { Acceso } from 'src/app/models/login/acceso/acceso';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  opened = false;
  
  accesos:any[];

  nombres:any;

  apellidos:any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getAccess();
  }

  getAccess():void{
    console.log();
    this.accesos=this.authService.usuario.accesos;
    console.log(this.accesos);
    this.nombres=this.authService.usuario.nombres;
    this.apellidos=this.authService.usuario.apellidos;
    console.log()
  }

  serrarcecion():void{
    this.authService.logout();
  }

}
