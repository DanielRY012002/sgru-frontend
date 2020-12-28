import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso/curso.service';
import { AddCursoComponent } from '../add-curso/add-curso.component';
import { UpdateCursoComponent } from '../update-curso/update-curso.component';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos:any = new MatTableDataSource();
  constructor(private cursoService:CursoService,
    private router: Router, private activatedRoute:ActivatedRoute, public dialog: MatDialog) { }
    @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.listar();
  }
  ngAfterViewInit() {
    this.cursos.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cursos.filter = filterValue.trim().toLowerCase();
  }
  delCurso(num:number):void{
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
        this.cursoService.deleteCurso(num).subscribe(
          response=>{
        this.listar()
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )})
      }
      }
    )   
}
  public listar():void{
    this.cursoService.getCursos().subscribe(
      (data)=>{
      this.cursos.data = data['CURSOR_CURSO'];
      }) 
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCursoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listar();
    });
  }
  openDialogo(n:number): void {
    const dialogRef = this.dialog.open(UpdateCursoComponent, {
      data:{id:n}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listar();
      console.log('The dialog was closed');
    });
  }
}
