import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/login/usuario/usuario';
import { AccesoService } from 'src/app/services/login/accesos/acceso.service';
import { AuthService } from 'src/app/services/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario:Usuario=new Usuario();
  menus:any;
  opened = false;
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  @ViewChild('sidenav') sidenav1: MatSidenav;
  isExpanded1 = false;
  showSubmenu1: boolean = false;
  isShowing1 = false;

  constructor(private accesoService:AccesoService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    let conv;
    this.listMenus();
    conv=JSON.parse(sessionStorage.usuario);
    this.usuario.nombres=conv.nombres;
    console.log(this.usuario.nombres);
  }

  cerrarSesion():void{
    this.authService.logout();
    this.menus=null;
    Swal.fire(
      'Cerrado Sesion Con exito','','success'
    )
    this.router.navigate(['/login'])
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
    if (!this.isExpanded1) {
      this.isShowing1 = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
    if (!this.isExpanded1) {
      this.isShowing1 = false;
    }
  }

  onSelect() {
    this.showSubmenu = !this.showSubSubMenu;
  }

  listMenus():void{
    let hola;
    hola =JSON.parse(sessionStorage.getItem('usuario'));
    this.menus=hola['accesos']
  }
}
