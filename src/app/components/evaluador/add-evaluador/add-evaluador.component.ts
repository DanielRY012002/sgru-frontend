import { DatePipe } from '@angular/common';
import { Component, Host, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoCivil } from 'src/app/models/evaluador/estadocivil/estado-civil';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { TipoDocumento } from 'src/app/models/evaluador/tipodocumento/tipo-documento';
import { TipoEvaluador } from 'src/app/models/evaluador/tipoevaluador/tipo-evaluador';
import { EstadoCivilService } from 'src/app/services/evaluador/estadocivil/estado-civil.service';
import { EvaluadorService } from 'src/app/services/evaluador/evaluador.service';
import { TipoDocumentoService } from 'src/app/services/evaluador/tipodocumento/tipo-documento.service';
import { TipoEvaluadorService } from 'src/app/services/evaluador/tipoevaluador/tipo-evaluador.service';
import { FuncionesService } from 'src/app/services/funciones/funciones.service';
import { ListEvaluadorComponent } from '../list-evaluador/list-evaluador.component';

@Component({
  selector: 'app-add-evaluador',
  templateUrl: './add-evaluador.component.html',
  styleUrls: ['./add-evaluador.component.css']
})
export class AddEvaluadorComponent implements OnInit {
  hola: number;
  tipoEvaluadores: any[];
  tipoDocumentos: any[];
  estadosCiviles: any[];
  @Input() isRegi: boolean;
  @Input() isSelected: boolean;
  evaluador: Evaluador = new Evaluador();
  sexo: any = [{ id: "M", nombre: "Masculino" }, { id: "F", nombre: 'Femenino' }];
  constructor(@Host() private listEvaluadorComponent: ListEvaluadorComponent, private tipoEvaluadorService: TipoEvaluadorService, private estadoCivilService: EstadoCivilService, private tipoDocumentoService: TipoDocumentoService, private router: Router, private evaluadorService: EvaluadorService, private funcion: FuncionesService) {
  }


  ngOnInit(): void {
    this.listTipoEvaluador();
    this.listEstadoCivil();
    this.listTipoDocumento();
    this.getEvaluador();
    console.log(this.isRegi);
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  Register(): void {
    this.listEvaluadorComponent.clean();
    this.listEvaluadorComponent.isRegister = false;
  }
  add(): void {
    console.log(this.evaluador);
    this.evaluadorService.addEvaluador(this.evaluador).subscribe(response => console.log(response))
    this.listEvaluadorComponent.isRegister = false;

  }

  listTipoEvaluador(): void {
    this.tipoEvaluadorService.getTipoEvaluadores().subscribe(data => {
      this.tipoEvaluadores = data['CURSOR_TIPO_EVALUADOR']
      console.log(this.tipoEvaluadores)
    });
  }
  listEstadoCivil(): void {
    this.estadoCivilService.getEstadoCivil().subscribe(data => {
      this.estadosCiviles = data['CURSOR_EST_CIV'];
      console.log(this.estadosCiviles);
    });
  }
  listTipoDocumento(): void {
    this.tipoDocumentoService.getTipoDocumentos().subscribe(data => {
      this.tipoDocumentos = data['CURSOR_TIPO_DOC'];
      console.log(this.tipoDocumentos)
    });
  }

  select(): void {
    this.isSelected = true
    this.buscar(this.evaluador.tipo_doc_id);
    this.evaluador.n_doc = null;

  }
  buscar(n: number) {
    for (let e of this.tipoDocumentos) {
      if (e.TIPO_DOC_ID == this.evaluador.tipo_doc_id) {
        this.hola = e.DIGITOS;
      }
    }
  }


  getEvaluador(): void {
    this.evaluador = this.listEvaluadorComponent.evaluadorModel;
  }



}
