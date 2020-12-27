import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, NgForm, Validators,  FormBuilder, FormGroup  } from '@angular/forms';

import { Alternativa} from '../../../models/instrumento/alternativa';
import { AlternativaService } from '../../../services/instrumento/alternativa.service';

@Component({
  selector: 'app-alternativa-instrumento',
  templateUrl: './alternativa-instrumento.component.html',
  styleUrls: ['./alternativa-instrumento.component.css'],
  providers:[AlternativaService]
})
export class AlternativaInstrumentoComponent implements OnInit {

  public alternativas: Alternativa[];

  public statussClass: boolean;

  @Input() alternativa:Alternativa;
  @Output() deleteClicked:EventEmitter<any> = new EventEmitter();

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  checked = false;

  public correcta_estado:string;

  constructor(
    private _alternativaService:AlternativaService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    /*
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  
    this.getAlternativas(173);
    */
  }

  enableForm(id) {
    if (this.alternativa.alternativa_id = id) {
      this.statussClass = !this.statussClass;
    }
  } 
  
  updateAlternativa(form :NgForm){
    
    console.log(form.value);
    console.log(this.alternativa);
    this._alternativaService.updateAlternativa(this.alternativa).subscribe(
      response =>{
        console.log(response),
        console.log("actualizado alternativa");
        this.statussClass = false;
      },
      error =>{

      }
    )

  }
  onChangeChekcked(event){
    console.log(event.checked);
    if(event.checked){
      this.alternativa.correcta_estado = 'Y';
    }else if(!event.checked){
      this.alternativa.correcta_estado = 'N';
    }
  }
  deleteAlternativa(){
    this.deleteClicked.emit(this.alternativa.alternativa_id);
  }

  
/*
  onSubmit(form:NgForm ){
    if(form.value.correcta_estado == true){
      this.correcta_estado = 'Y'
    }else if(form.value.correcta_estado == false){
      this.correcta_estado = 'N'
    }
    console.log(this.correcta_estado);
  }
  */

/*
  getAlternativas(id:number){
    this._alternativaService.getAlternativas(id).subscribe(
      ({alternativas}:any) =>{
        this.alternativas = alternativas;
      },
      error =>{

      }
    )
  }*/
}
