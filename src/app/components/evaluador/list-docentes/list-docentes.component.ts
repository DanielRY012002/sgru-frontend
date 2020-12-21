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
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private evaluadorService: EvaluadorService, private snackbar: MatSnackBar,private listEvaluador:ListEvaluadorComponent) { }
  ngOnInit(): void {
    this.listDocentes();
  }
  ngAfterViewInit() {
    console.log(this.paginator)
    this.dataSource.data=this.docentes;
    console.log(this.dataSource.data)
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);

  }

  listDocentes():any {
    this.load = false;
    this.evaluadorService.getDocentes().subscribe(
      data => {
        if (data.length==0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable=false;
          return undefined;
        }
        else {
          this.load = true;
          this.docentes=data['CURSOR_DEP']
          this.showtable=true;
          return data['CURSOR_DEP'];
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
