import { Component, OnInit } from '@angular/core';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { ListEvaluadorComponent } from '../list-evaluador/list-evaluador.component';

@Component({
  selector: 'app-list-expertos',
  templateUrl: './list-expertos.component.html',
  styleUrls: ['./list-expertos.component.css']
})
export class ListExpertosComponent implements OnInit {
  expertos: Evaluador[];
  load: boolean;
  notDataFound: boolean = false;
  showtable: boolean = false;
  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO', 'EDITAR', 'ELIMINAR'];
  constructor(private evaluadorService: EvaluadorService, private listEvaluador: ListEvaluadorComponent) { }

  ngOnInit(): void {
    this.listExpertos();
  }

  listExpertos(): void {
    this.load = false;
    this.evaluadorService.getExpertos().subscribe(
      data => {
        this.expertos = data['CURSOR_DEP'];
        if (this.expertos.length === 0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable = false;
        }
        else {
          console.log(this.expertos);
          this.load = true;
          this.showtable = true;

        }
      });
  }

  delete(n: number): void {
    console.log(n);
    this.evaluadorService.deleteEvaluador(n).subscribe(
      response => {
        console.log(response);
        this.listExpertos();
      }
    );
  }
  update(n: number) {
    this.listEvaluador.update(n);
  }
}
