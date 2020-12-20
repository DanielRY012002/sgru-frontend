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
  docentes: Evaluador[];
  load: boolean;
  showtable: boolean = false;
  notDataFound: boolean = false;
  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO', 'EDITAR', 'ELIMINAR'];
  dataSource= new MatTableDataSource(this.listDocentes());
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private evaluadorService: EvaluadorService, private snackbar: MatSnackBar,private listEvaluador:ListEvaluadorComponent) { }
  ngOnInit(): void {
    this.listDocentes();
    console.log(this.dataSource);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listDocentes(): any {
    this.load = false;
    this.evaluadorService.getDocentes().subscribe(
      data => {
        this.docentes = data['CURSOR_DEP']
        if (this.docentes.length === 0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable=false;
        }
        else {
          console.log(this.docentes);
          this.load = true;
          this.showtable=true;
          return this.docentes;
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

}
