import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencias } from 'src/app/models/competencias/competencias';
import { CompetenciasService } from 'src/app/services/competencias/competencias.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-competencia',
  templateUrl: './update-competencia.component.html',
  styleUrls: ['./update-competencia.component.css']
})
export class UpdateCompetenciaComponent implements OnInit {

  @Output() listc = new EventEmitter<number>();
  competencias:any;
  competencia: Competencias= new Competencias();
  tipocompetencia: any;

  constructor(private competenciasService: CompetenciasService, private router: Router, 
    private activatedRoute: ActivatedRoute,   @Inject  (MAT_DIALOG_DATA ) public data: any,
    private dialogRef: MatDialogRef <UpdateCompetenciaComponent> ) { }

  ngOnInit(): void {
    console.log(this.data["competencias_id"]);
    this.cargaCompetencia();
    this.list_ticompetencia();
  }
  list_ticompetencia():void{
    this.competenciasService.gettipoCompetencias().subscribe(
    (data) => {    
          this.tipocompetencia= (data[0]["CURSOR_TIPO_COMPETENCIAS"]);
    })
  }
  cargaCompetencia():void{  
    this.competenciasService.getCompetencia(this.data["competencias_id"]).subscribe(
      (data)=>{
        this.competencias=data ['CURSOR_COMPETENCIAS']
        this.competencia.competencias_id=this.competencias[0].COMPETENCIAS_ID;
        this.competencia.tipo_competencias_id=this.competencias[0].TIPO_COMPETENCIAS_ID;
        this.competencia.nombre=this.competencias[0].NOMBRE;            
        this.competencia.descripcion=this.competencias[0].DESCRIPCION;           
      })
} 
modificarCompetencia():void{
  console.log("reynita");
   this.competenciasService.updateCompetencia(this.competencia).subscribe(    
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
        if (result.isConfirmed){  console.log("reynita");
            Swal.fire(
            'Actualizado!',
            'El registro ha sido Modificado.',
            'success')            
        }this.listc.emit( response
          );
        }
      )           
    }
  )
}
}
