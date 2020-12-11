import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AccesoService } from 'src/app/services/login/accesos/acceso.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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

  constructor(private accesoService:AccesoService) { }

  ngOnInit(): void {
    this.listMenus();
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
    this.accesoService.getMainRoutes().subscribe(data=>this.menus=data["CURSOR_ACCESO"])
  }
}
