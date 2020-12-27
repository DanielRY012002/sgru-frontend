import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { Pregunta } from '../../../models/instrumento/pregunta';
import { Alternativa } from '../../../models/instrumento/alternativa';

import { AlternativaService } from '../../../services/instrumento/alternativa.service';
import { PreguntaService } from '../../../services/instrumento/pregunta.service';

@Component({
  selector: 'app-pregunta-instrumento',
  templateUrl: './pregunta-instrumento.component.html',
  styleUrls: ['./pregunta-instrumento.component.css'],
  providers:[AlternativaService,PreguntaService]
})
export class PreguntaInstrumentoComponent implements OnInit {
  public alternativas: Alternativa[];

  @Input() pregunta: Pregunta; 
  @Output() editClicked: EventEmitter<any> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private _alternativaService:AlternativaService,
    private _preguntaService:PreguntaService
  ) { }

  ngOnInit(): void {

    this.getAlternativas(this.pregunta.pregunta_id);
  }


  getAlternativas(id:number){
    this._alternativaService.getAlternativas(id).subscribe(
      response =>{
        if(response.alternativas){
          this.alternativas = response.alternativas;
        }
        
      },
      error =>{

      }

    )

  }
  uploadPregunta(){
    this.editClicked.emit(this.pregunta.pregunta_id);
  }
  deletePregunta(){
    this.deleteClicked.emit(this.pregunta.pregunta_id);
  }

}
