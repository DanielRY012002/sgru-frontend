import { Component, EventEmitter, Host, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { chmod } from 'fs';
import { Competencia_Linea } from 'src/app/models/competencias/competencias';
import { CompetenciasService } from 'src/app/services/competencias/competencias.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-comp-linea',
  templateUrl: './add-comp-linea.component.html',
  styleUrls: ['./add-comp-linea.component.css']
})

export class AddCompLineaComponent implements OnInit {
  
@Output() listc = new EventEmitter<number>();
competencialineaModel: Competencia_Linea = new Competencia_Linea();
competencia_linea: any;
lineapa: any;
plan: any;
chom: boolean=false;

constructor(private competenciasService: CompetenciasService, 
  private ruter: Router, private activatedRoute: ActivatedRoute,
  public dialogRef: MatDialogRef <AddCompLineaComponent>, @Inject(MAT_DIALOG_DATA) 
  public data:any) { }

  ngOnInit(): void {
    this.list_competencia();
    this.list_plan();
    this.list_lineapa();   
  }
  cambio():void { this.chom=true; }

  create(): void{
    this.competenciasService.addComplinea(this.competencialineaModel).subscribe(
      response => 
      { this.dialogRef.close();
      Swal.fire('Nueva Asignacion', `completada realizado con existo`,"success")
    this.listc.emit(response); })
    }
    list_plan():void{
      this.competenciasService.getplan().subscribe(
        (data) =>{
          this.plan=(data["CURSOR_PLAN"]);       
        })
      }
      list_lineapa():void{
        this.competenciasService.getlineapa().subscribe(
          (data) =>
          {
            this.lineapa=(data["CURSOR_LINEAS_PA"]);
          }
        )
      }
      list_competencia():void {
        this.competenciasService.getCompetencias().subscribe(
          (data) =>
          {
            this.competencia_linea=(data["CURSOR_COMP_NOMBRE"])
          })
          }
}
