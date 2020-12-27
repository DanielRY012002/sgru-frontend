import { Component, EventEmitter, OnInit, Output,AfterViewInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { ListEvaluadorComponent } from '../list-evaluador/list-evaluador.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-docentes',
  templateUrl: './list-docentes.component.html',
  styleUrls: ['./list-docentes.component.css']
})
export class ListDocentesComponent implements OnInit,AfterViewInit {
  load: boolean;
  showtable: boolean = false;
  notDataFound: boolean = false;
  datasource:any=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO', 'EDITAR', 'ELIMINAR'];
  constructor(private evaluadorService: EvaluadorService, private snackbar: MatSnackBar,private listEvaluador:ListEvaluadorComponent) { }
  ngOnInit(): void {
    this.listDocentes();
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  listDocentes():void{
    this.load = false;
    this.evaluadorService.getDocentes().subscribe(
      data => {
        console.log()
        if (data['CURSOR_DEP'].length==0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable=false;
        }
        else {
          this.load = true;
          this.datasource.data=data['CURSOR_DEP']
          this.showtable=true;
        }
      });
  }

  delete(n: number): void {
    console.log(n);
    this.evaluadorService.deleteEvaluador(n).subscribe(
      response => {
        console.log(response);
        this.listDocentes();
      }
      );
  }
  update(n:number){
    this.listEvaluador.update(n);
  }

  filtrarDocentes(e:string):void{
    console.log(e);
    this.datasource.filter=e.trim().toLowerCase();
  }

}



