import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/login/usuario/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario:Usuario=new Usuario()
    constructor() { }

  ngOnInit(): void {
    let conv;
    conv=JSON.parse(sessionStorage.usuario);
    this.usuario.nombres=conv.nombres;
    console.log(this.usuario.nombres);
  }

}
