import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  opened = false;
  @ViewChild('sidenav') sidenav:MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  submains:any[];
  
  isExpanded1 = false;
  showSubmenu1: boolean = false;
  isShowing1 = false;
  showSubSubMenu1:boolean = false;

  constructor(private route:Router,private authService:AuthService,private tost:ToastrService,private accesoService:AccesoService,private activatedRoute:ActivatedRoute){
  }

  ngOnInit(): void {
    
    if(history.state.data==undefined||history.state.data==null){
      console.log('hola')
      this.route.navigate(['dashboard']);
    }
    else{
      this.accesoService.getSubMainRoutes(history.state.data.id).subscribe(data=>this.submains=data['CURSOR_ACCESO']);
    }
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

  onSelect(){
   if(this.showSubmenu){
    !this.showSubSubMenu;
   } 
   if(this.showSubmenu1){
    !this.showSubmenu1;
   }
   

  }

  logOut():void{
    this.authService.logout();
    this.tost.success('Cierre de sesion con exito', ``, { positionClass: 'toast-bottom-right' })
    this.route.navigate(['/login']);
  }
}
