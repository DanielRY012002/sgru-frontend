import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { strict } from 'assert';
import { on } from 'process';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { FuncionesService } from 'src/app/services/funciones/funciones.service';
import { AddEvaluadorComponent } from '../add-evaluador/add-evaluador.component';

@Component({
  selector: 'app-list-evaluador',
  templateUrl: './list-evaluador.component.html',
  styleUrls: ['./list-evaluador.component.css']
})
export class ListEvaluadorComponent implements OnInit {
  evaluadorModel: Evaluador = new Evaluador();
  isRegi:boolean;
  isSelected: boolean;
  evaluador: any;
  evaluadores: Evaluador[];
  isRegister: boolean = false;
  constructor(private evaluadorService: EvaluadorService) { }

  ngOnInit(): void {
  }
  Register(): void {
    this.isRegi=true;
    this.isSelected=false;
    this.isRegister = true;
  }

  listEvaluadores(): void {
    this.evaluadorService.getEvaluadores().subscribe(data => this.evaluadores = data['CURSOR_DEP']);
  }

  update(n: number): void {
    this.evaluadorService.getEvaluador(n).subscribe(
      data => {
        this.evaluador = data['CURSOR_DEP'];
        this.evaluadorModel.persona_id = this.evaluador[0].PERSONA_ID;
        this.evaluadorModel.nombres = this.evaluador[0].NOMBRES;
        this.evaluadorModel.apellidos = this.evaluador[0].APELLIDOS;
        this.evaluadorModel.tipo_doc_id = this.evaluador[0].TIPO_DOC_ID;
        this.evaluadorModel.n_doc = this.evaluador[0].N_DOC;
        this.evaluadorModel.sexo = this.evaluador[0].SEXO;
        this.evaluadorModel.correo = this.evaluador[0].CORREO;
        this.evaluadorModel.estado_civil_id = this.evaluador[0].ESTADO_CIVIL_ID;
        this.evaluadorModel.fecha_nac = this.fechaType(this.evaluador[0].FECHA_NAC);
        this.evaluadorModel.telefono = this.evaluador[0].TELEFONO;
        this.evaluadorModel.tipo_evaluador_id = this.evaluador[0].TIPO_EVALUADOR_ID;
        this.evaluadorModel.grado_academico = this.evaluador[0].GRADO_ACADEMICO;
        this.evaluadorModel.correo_trabajo = this.evaluador[0].CORREO_TRABAJO;
        this.evaluadorModel.estado = this.evaluador[0].ESTADO;
        console.log(this.evaluadorModel);
      }
    );
    this.isRegi=false;
    this.isSelected=true;
    this.isRegister = true;
  }

  fechaType(s: String): string {
    return s.substring(0, 10);
  }
  clean():void{
    this.evaluadorModel.nombres='';
    this.evaluadorModel.apellidos='';
    this.evaluadorModel.tipo_doc_id=null;
    this.evaluadorModel.n_doc='';
    this.evaluadorModel.sexo=null;
    this.evaluadorModel.fecha_nac=null;
    this.evaluadorModel.estado_civil_id=null;
    this.evaluadorModel.correo='';
    this.evaluadorModel.correo_trabajo='';
    this.evaluadorModel.telefono='';
    this.evaluadorModel.tipo_evaluador_id=null;
    this.evaluadorModel.grado_academico='';
    this.evaluadorModel.estado='';
    this.evaluadorModel.persona_id=0;

  }

}
