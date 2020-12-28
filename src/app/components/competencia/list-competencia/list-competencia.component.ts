import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


import { AddCompetenciaComponent } from '../add-competencia/add-competencia.component';
import { UpdateCompetenciaComponent } from '../update-competencia/update-competencia.component';
import { Competencias } from 'src/app/models/competencias/competencias';
import { CompetenciasService } from 'src/app/services/competencias/competencias.service';

@Component({
  selector: 'app-list-competencia',
  templateUrl: './list-competencia.component.html',
  styleUrls: ['./list-competencia.component.css']
})
export class ListCompetenciaComponent implements OnInit {
  
  competencias: any = new MatTableDataSource();
  competenciasModel: Competencias = new Competencias();

  constructor(private competenciasService: CompetenciasService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.listar(); 
  }
  ngAfterViewInit() {
    this.competencias.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.competencias.filter = filterValue.trim().toLowerCase();
  }
  listar():void{  
    this.competenciasService.getCompetencias().subscribe(
      (data)=>{
        this.competencias.data = data['CURSOR_COMP_NOMBRE']
        console.log(this.competencias);
      }
    )
  }
  delCompetencia(num:number):void {
    Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar'
      }).then ((result)=> {
        if ( result.isConfirmed){
          this.listar()
          Swal.fire(
            'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
        }
        this.competenciasService.deleteCompetencia(num).subscribe(
          response=>{}
        )
      })
      }
      openDialog(): void {
        let dialogRef = this.dialog.open(AddCompetenciaComponent, {
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.listar();
        });
      } 
      openDialogg(num:number): void {
        const dialogRef = this.dialog.open(UpdateCompetenciaComponent, { data:
          {
            competencias_id:num 
          }          
        });      
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.listar();
        });
      }
}
