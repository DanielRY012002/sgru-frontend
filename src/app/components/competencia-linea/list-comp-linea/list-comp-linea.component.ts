import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { AddCompLineaComponent } from '../add-comp-linea/add-comp-linea.component';
import { UpdateCompLineaComponent } from '../update-comp-linea/update-comp-linea.component';
import { MatTableDataSource } from '@angular/material/table';
import { Competencias } from 'src/app/models/competencias/competencias';
import { CompetenciasService } from 'src/app/services/competencias/competencias.service';

@Component({
  selector: 'app-list-comp-linea',
  templateUrl: './list-comp-linea.component.html',
  styleUrls: ['./list-comp-linea.component.css']
})
export class ListCompLineaComponent implements OnInit {

  competenciaslinea: any = new MatTableDataSource();
  competenciaModel: Competencias = new Competencias();
  constructor(private competenciasService: CompetenciasService,
    private ruter: Router, private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void { this.listarcl(); }
  ngAfterViewInit() {
    this.competenciaslinea.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.competenciaslinea.filter = filterValue.trim().toLowerCase();
  }

  public listarcl():void{  
    this.competenciasService.getComplineas().subscribe(
      (data)=>{
        this.competenciaslinea = data[0]['CURSOR_COMLI_NOMBRE']
        console.log(this.competenciaslinea);
      }
    )
  }
  delComplinea(num:number):void {
    Swal.fire({
          title: 'Estas seguro de Eliminar Asignación?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar'
      }).then ((result)=> {
        if ( result.isConfirmed){
          this.listarcl()
          Swal.fire(
            'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
        }
        this.competenciasService.deleteComplinea(num).subscribe(
          response=>{}
        )
      })
      }
      openDialog(): void {
        let dialogRef = this.dialog.open(AddCompLineaComponent, {
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.listarcl();
        });
      }
      openDialogg(num:number): void {
        const dialogRef = this.dialog.open(UpdateCompLineaComponent, { data:
          {
            competencias_id:num 
          }          
        });      
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.listarcl();
        });
      }
}
