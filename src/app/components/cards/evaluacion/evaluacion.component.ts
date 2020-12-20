import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoService } from 'src/app/services/login/accesos/acceso.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  submains:any;
  constructor(private accesoService:AccesoService,private location:Location,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.location.getState());
    if(history.state.id==undefined){
      console.log('hola');
      this.activatedRoute.data.subscribe(data=>this.listSubmains(data.id));
    } else {
      this.listSubmains(history.state.id);
    }
  }

  listSubmains(n:number){
    this.accesoService.getSubMainRoutes(n).subscribe(data=>this.submains=data['CURSOR_ACCESO']);
  }

}
