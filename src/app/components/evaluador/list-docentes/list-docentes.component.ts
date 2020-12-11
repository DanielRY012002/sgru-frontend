import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { AddEvaluadorComponent } from '../add-evaluador/add-evaluador.component';
import { ListEvaluadorComponent } from '../list-evaluador/list-evaluador.component';

@Component({
  selector: 'app-list-docentes',
  templateUrl: './list-docentes.component.html',
  styleUrls: ['./list-docentes.component.css']
})
export class ListDocentesComponent implements OnInit {
  docentes: Evaluador[];
  load: boolean;
  showtable: boolean = false;
  notDataFound: boolean = false;
  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO', 'EDITAR', 'ELIMINAR'];
  constructor(private evaluadorService: EvaluadorService, private snackbar: MatSnackBar,private listEvaluador:ListEvaluadorComponent) { }

  ngOnInit(): void {
    this.listDocentes();
  }

  listDocentes(): void {
    this.load = false;
    this.evaluadorService.getDocentes().subscribe(
      data => {
        this.docentes = data['CURSOR_DEP'];
        if (this.docentes.length === 0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable=false;
        }
        else {
          console.log(this.docentes);

          this.load = true;
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

}
