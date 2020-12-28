import { Component, Input, OnInit } from '@angular/core';
import { RubricasService } from 'src/app/services/rubricas/rubricas.service';


@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {
  @Input() proyecto;
  toggleCursos = false;
  cursos: any[] = [];
  
  loader = false;

  constructor(private _rubricaService: RubricasService) { }

  ngOnInit(): void {
  }
  confirmStateToggleCurso() {
    !this.toggleCursos ?  this.getCursos() : this.toggleAction()
  }
  getCursos(){
    this.loader = true;

    this._rubricaService.getCurso(this.proyecto.py_id).subscribe(
      ({ cursos }: any) => {
        this.loader = false
        this.cursos = cursos;
        this.toggleAction()
      }
    )
  }
  toggleAction(){
    this.toggleCursos = !this.toggleCursos;
  }

}
