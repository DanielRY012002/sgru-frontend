import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PlancursoService } from 'src/app/services/plancurso/plancurso.service';
import { AddPlancursoComponent } from '../add-plancurso/add-plancurso.component';
import { UpdatePlancursoComponent } from '../update-plancurso/update-plancurso.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listar-plancurso',
  templateUrl: './listar-plancurso.component.html',
  styleUrls: ['./listar-plancurso.component.css']
})
export class ListarPlancursoComponent implements OnInit {
  /**planescursos:any;**/
  planescursos1:any = new MatTableDataSource();
  constructor(private plancursoService:PlancursoService,
    private router: Router, private activatedRoute:ActivatedRoute, public dialog: MatDialog) { }
    @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.listar1();
  }
  ngAfterViewInit() {
    this.planescursos1.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.planescursos1.filter = filterValue.trim().toLowerCase();
  }
  delPlancurso(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.plancursoService.deletePlancurso(num).subscribe(
          response=>{
        this.listar1()
        Swal.fire(
          'Eliminado!',
          'La Asignacion ha sido eliminado.',
          'success'
        )})
      }
      }
    )   
}
  /**public listar():void{
    this.plancursoService.getPlanescursos().subscribe(
      (data)=>{
      this.planes = data['CURSOR_PLAN_CURSO'];
      }) 
  }**/
  public listar1():void{
    this.plancursoService.getPlanescursos1().subscribe(
      (data)=>{
      this.planescursos1.data = data['CURSOR_PLAN_CURSO_N'];
      }) 
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlancursoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listar1();
    });
  }
  openDialogo(n:number): void {
    const dialogRef = this.dialog.open(UpdatePlancursoComponent, {
      data:{id:n}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listar1();
      console.log('The dialog was closed');
    });
  }
}
