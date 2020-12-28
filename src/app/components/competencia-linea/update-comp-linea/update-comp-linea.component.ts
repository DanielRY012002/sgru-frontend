import { Inject } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencia_Linea } from 'src/app/models/competencias/competencias';
import { CompetenciasService } from 'src/app/services/competencias/competencias.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-comp-linea',
  templateUrl: './update-comp-linea.component.html',
  styleUrls: ['./update-comp-linea.component.css']
})
export class UpdateCompLineaComponent implements OnInit {

  @Output() list= new EventEmitter<number>();
  competencialineaModel: Competencia_Linea = new Competencia_Linea();
  complineas:any;
  complinea: Competencia_Linea = new Competencia_Linea();
  lineapa:any;
  competencia_linea:any;
  plan: any;
  chom:boolean= false;
  
  constructor(private competenciasService: CompetenciasService, private router: Router, 
    private activatedRoute: ActivatedRoute,   @Inject  (MAT_DIALOG_DATA ) public data: any,
    private dialogRef: MatDialogRef <UpdateCompLineaComponent>) { }

  ngOnInit(): void {
    this.list_competencia();
    this.list_plan();
    this.list_lineapa(); 
    this.cargaComplinea(); 
  }
  cambio():void { this.chom=true; }
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
        cargaComplinea():void{
          console.log(this.data.competencias_id);
            this.competenciasService.getComplinea(this.data.competencias_id).subscribe(
              (data)=>{ console.log(data)
                this.complineas=data['CURSOR_COMPETENCIA_LINEA']
                this.complinea.cl_id=this.data.competencias_id;
                this.complinea.competencias_id=this.complineas[0].COMPETENCIAS_ID;
                this.complinea.linea_plan_id=this.complineas[0].LINEA_PLAN_ID;             
              })} 
              modificarComplinea():void{
                console.log("reynita");
                this.competenciasService.updateComplinea(this.complinea).subscribe(    
                response=>{  this.dialogRef.close();
                  Swal.fire({
                    title: 'Estas seguro?',
                    text: "No podras revertir esto!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, update it!'
                  }).then((result)=> {        
                    if (result.isConfirmed){console.log("reynita");
                        Swal.fire(
                        'Actualizado!',
                        'El registro ha sido Modificado.',
                        'success')
                    }this.list.emit( response
                      );
                        })      
                  }
                )
              }
}
