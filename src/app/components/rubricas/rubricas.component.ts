import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/rubricas/docentes';
import { Proyectos } from 'src/app/models/rubricas/proyectos';
import { Rubricas } from 'src/app/models/rubricas/rubricas';
import { Semestre } from 'src/app/models/rubricas/semestre';
import { RubricasService } from 'src/app/services/rubricas/rubricas.service';



interface Ciclos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rubricas',
  templateUrl: './rubricas.component.html',
  styleUrls: ['./rubricas.component.css']
})
export class RubricasComponent implements OnInit {

  rubrica: Rubricas[];
  proyectos: Proyectos[];
  semestre: Semestre[];
  cursos: any[] = []; 
  docente: Docente[];  
  ID_EVALUADOR: any;
  visible: boolean[];

  constructor(public Rubrica: RubricasService) { }

  ngOnInit(): void {
    this.getSemestre();
  }
  getSemestre() {
    //Especificar el error del observable -( susbcribe)
    this.Rubrica.getSemestre().subscribe(
      (data) => {
        // no poner (data) , poner el objeto de retorno -> semestre
        // evitar data['semestres']
        this.semestre = data['semestres'];
        this.Rubrica.semestre = data['semestres'] as Semestre[];
      }
      , (e) => {
        // Poner una alerta o poner mensaje si no hay un valor
        console.log(e)
        // this.error = new Error("Esta mal","error")
      })
  }
  getProyectos(value) {
    this.Rubrica.getProyectos(value).subscribe(
      (data) => {
        this.proyectos = data['proyectos'];
      }
    )
  }
}
