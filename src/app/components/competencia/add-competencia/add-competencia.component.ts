import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencias } from 'src/app/models/competencias/competencias';
import { CompetenciasService } from 'src/app/services/competencias/competencias.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-competencia',
  templateUrl: './add-competencia.component.html',
  styleUrls: ['./add-competencia.component.css']
})
export class AddCompetenciaComponent implements OnInit {

  control = new FormControl('', Validators.required);
selectFormControl = new FormControl('', Validators.required);

@Output() listc = new EventEmitter<number>();
competenciasModel: Competencias = new Competencias();
tipocompetencia: any;
plan: any;
lineapa:any;
chom:boolean= false;
ticompetencia:any;


constructor(private competenciaService: CompetenciasService, 
  private ruter: Router, private activatedRoute: ActivatedRoute,
  public dialogRef: MatDialogRef <AddCompetenciaComponent>, @Inject(MAT_DIALOG_DATA) 
  public data:any) { }

  ngOnInit(): void {
    this.list_ticompetencia();
    this.list_plan();
    this.list_lineapa();
  }
  cambio():void { this.chom=true; }
  
  create():void{
    this.competenciaService.addCompetencia(this.competenciasModel).subscribe(
      response=>{this.dialogRef.close();
        Swal.fire('Nueva Competencia', `Competencia ${
          this.competenciasModel.nombre
        } creado con existo`,"success")
        this.listc.emit(response);
      }
    )
    }
    list_ticompetencia():void{
      this.competenciaService.gettipoCompetencias().subscribe(
      (data) => {    
            this.tipocompetencia= (data[0]["CURSOR_TIPO_COMPETENCIAS"]);
      })
    }
    list_plan():void{
      this.competenciaService.getplan().subscribe(
        (data) =>{
          this.plan=(data["CURSOR_PLAN"]);
         
        })
      }
      list_lineapa():void{
        this.competenciaService.getlineapa().subscribe(
          (data) =>
          {   this.lineapa=(data["CURSOR_LINEAS_PA"]);
          }
        )
      }
}
