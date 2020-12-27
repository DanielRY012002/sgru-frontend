import { Component, OnInit } from '@angular/core';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { ListEvaluadorComponent } from '../list-evaluador/list-evaluador.component';

@Component({
  selector: 'app-list-externos',
  templateUrl: './list-externos.component.html',
  styleUrls: ['./list-externos.component.css']
})
export class ListExternosComponent implements OnInit {
  externos: Evaluador[];
  load: boolean;
  notDataFound: boolean = false;
  showtable: boolean = false;
  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO', 'EDITAR', 'ELIMINAR'];
  constructor(private evaluadorService: EvaluadorService, private listEvaluador: ListEvaluadorComponent) { }

  ngOnInit(): void {
    this.listExternos();
  }
  listExternos(): void {
    this.load = false;
    this.evaluadorService.getExternos().subscribe(
      data => {
        this.externos = data['CURSOR_DEP'];
        if (this.externos.length === 0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable = false;
        }
        else {
          console.log(this.externos);
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
        this.listExternos();
      }
    );
  }
  update(n: number) {
    this.listEvaluador.update(n);
  }


}
