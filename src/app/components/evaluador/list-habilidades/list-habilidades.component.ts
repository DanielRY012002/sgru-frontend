import { Component, OnInit } from '@angular/core';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { ListEvaluadorComponent } from '../list-evaluador/list-evaluador.component';

@Component({
  selector: 'app-list-habilidades',
  templateUrl: './list-habilidades.component.html',
  styleUrls: ['./list-habilidades.component.css']
})
export class ListHabilidadesComponent implements OnInit {
  habilidades: Evaluador[];
  load: boolean;
  notDataFound: boolean = false;
  showtable: boolean = false;
  displayedColumns: string[] = ['NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'GRADO_ACADEMICO', 'EDITAR', 'ELIMINAR'];
  constructor(private evaluadorService: EvaluadorService, private listEvaluador: ListEvaluadorComponent) { }

  ngOnInit(): void {
    this.listHabilidades();
  }
  listHabilidades(): void {
    this.load = false;
    this.evaluadorService.getHabilidades().subscribe(
      data => {
        this.habilidades = data['CURSOR_DEP'];
        if (this.habilidades.length === 0) {
          this.load = true;
          this.notDataFound = true;
          this.showtable = false;
        }
        else {
          console.log(this.habilidades);
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
        this.listHabilidades();
      }
    );
  }
  update(n: number) {
    this.listEvaluador.update(n);
  }


}
