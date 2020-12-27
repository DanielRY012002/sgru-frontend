import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Instrumento } from '../../../models/instrumento/instrumento';
import { InstrumentoService } from '../../../services/instrumento/instrumento.service';

import { Pregunta } from '../../../models/instrumento/pregunta';
import { PreguntaService } from '../../../services/instrumento/pregunta.service';

import { Alternativa } from '../../../models/instrumento/alternativa';
import { AlternativaService } from '../../../services/instrumento/alternativa.service';



import { FormControl, NgForm, Validators,  FormBuilder, FormGroup, FormGroupDirective  } from '@angular/forms';

import { Global } from '../../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2'; 


import { MatFormFieldControl} from '@angular/material/form-field';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { formatCurrency } from '@angular/common';
import { error } from 'protractor';

@Component({
  selector: 'app-detail-instrumento',
  templateUrl: './detail-instrumento.component.html',
  styleUrls: ['./detail-instrumento.component.css'],
  providers: [PreguntaService, ToastrService,InstrumentoService,AlternativaService]
})
export class DetailInstrumentoComponent implements OnInit {
  public url: String;
  public instrumento:Instrumento;
  public pregunta: Pregunta;
  public preguntas: Pregunta[];

  public alternativas:Alternativa[] = [];
  public alternativa:Alternativa;




  public agregar: String;
  public listado: String;
  public statussClass: boolean;




  isLinear = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  isEditable = false;


  checked = false;

  messageError:string = 'Campo requerido';


  public correcta_estado:string;

  @ViewChild('PreguntaDialog') PreguntaDialog: TemplateRef<any>;


  constructor(
    private dialog:MatDialog,
    private toastService: ToastrService,
    private _preguntaService: PreguntaService,
    private _instrumentoService: InstrumentoService,
    private _alternativaService:AlternativaService,
    private _router: Router,
    private _route: ActivatedRoute,
    private diaglog:MatDialog,
    private _formBuilder: FormBuilder
  ) {
    this.url = Global.url;
    this.agregar = "Crea una pregunta para tu ";
    this.listado = "Tus preguntas"
    this.pregunta = new Pregunta(null, null, '', null, '');
    this.alternativa = new Alternativa(null,null,'','');

  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let id = params.id;

        this.pregunta.instrumento_id = id;
        this.getCurrentInstrumento(id);
        this.getPreguntas(id);
      }
    )
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      peso:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      correcta_estado:['']
    });

  }


  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy
    this.diaglog.open(this.PreguntaDialog, dialogConfig);


  }
  onSend(form){  
    if(form.status === 'INVALID')
    {
      // display error in your form
    }else if(this.pregunta.pregunta_id == null){
        console.log(form.value)
        this.pregunta.nombre = form.value.nombre;
        this.pregunta.peso = form.value.peso;
        console.log(this.pregunta);
        this._preguntaService.createPregunta(this.pregunta).subscribe(
          response => {
    
            console.log(response);
            this.getPreguntas(this.pregunta.instrumento_id);
            this.pregunta.pregunta_id = response.pregunta_id;
    
          },
          error => {
    
          }
    
        )
        //this.pregunta.nombre = null;
        //this.pregunta.peso = null;
    }else if(this.pregunta.pregunta_id !=null){
      this._preguntaService.updatePregunta(this.pregunta).subscribe(
        response =>{
            console.log(response);
            console.log("acualizando");
            this.getPreguntas(this.pregunta.instrumento_id);
        },
        error =>{

        }
      )
    }
    
  }
  
  onSubmitAlternativa(form,formDirective:FormGroupDirective){
    if(form.value.correcta_estado == true){
      this.alternativa.correcta_estado = 'Y'
    }else if(form.value.correcta_estado == false){
      this.alternativa.correcta_estado = 'N'
    }
    console.log(this.pregunta.pregunta_id);

    if(this.alternativa.alternativa_id == null){
      this.alternativa.nombre = form.value.nombre
      this.alternativa.pregunta_id = this.pregunta.pregunta_id;
      console.log(this.alternativa)
      this._alternativaService.createAlternativa(this.alternativa).subscribe(
        response =>{
          console.log(response);
          this.getPreguntas(this.pregunta.instrumento_id);
          this._alternativaService.getAlternativas(response.pregunta_id).subscribe(
            ({alternativas}:any) =>{
  
              this.alternativas = alternativas;
              console.log(alternativas);
            },
            error =>{
  
            }
          );
          formDirective.resetForm();
          form.reset();
          this.messageError = 'Campo requerido';
        },
        error =>{
            this.messageError = 'No se puede enviar vacio';
          //alert("eror al enviar tu webada "+ error);
        }
      )

    }

    //formDirective.resetForm();
    // this.secondFormGroup.reset;
    // this.secondFormGroup.valid;
    // this.isValidField2(this.alternativa.nombre,form);
    
  }
  uploadAlternativa(id){
    this._preguntaService.getPregunta(id).subscribe(
      response =>{
          this.pregunta = response.pregunta;
          this._alternativaService.getAlternativas(this.pregunta.pregunta_id).subscribe(
            response=>{
              console.log(response);
              this.alternativas = response.alternativas
            },
            error =>{

            }
          )
      },
      error =>{
      
      }
    )
  }
  deleteAlternativa(id){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras revertir este cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        this._alternativaService.deleteAlternativa(id).subscribe(
          response =>{
            Swal.fire(
              'Eliminado!',
              'Se elimino correctamente',
              'success'
            )
            console.log(response);
            this._alternativaService.getAlternativas(this.pregunta.pregunta_id).subscribe(
              ({alternativas})=>{
                this.alternativas = alternativas;
              },
              error =>{
    
              }
            )
          },
          error =>{
            console.log(error);
          }
        )
       
      }
    })

 


  }
  deletePregunta(id){
    console.log(id);

    Swal.fire({
      title: 'Estas seguro de eliminarlo?',
      text: "No podras revertir este cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {

        this._preguntaService.deletePregunta(id).subscribe(
          response =>{
            Swal.fire(
              'Eliminado',
              'Se elimino correctamente',
              'success'
            )
            console.log(response);
            this._preguntaService.getPreguntas(this.instrumento.instrumento_id).subscribe(
              ({preguntas})=>{
                this.preguntas = preguntas;
              },
              error =>{
    
              }
            )
          },
          error =>{
    
          }
        )
  
      }
    })

    
 
  }
  closeAll(form1,form2){
    form1.reset();
    form2.reset();
    this.pregunta.pregunta_id = null;
    this.alternativa.alternativa_id = null;

    this._alternativaService.getAlternativas(0).subscribe(
      response =>{
        this.alternativas = response.alternativas;
      }
    );
    this._preguntaService.getPreguntas(this.instrumento.instrumento_id).subscribe(
      response =>{
        this.preguntas = response.preguntas;
      }
    )   

    this.diaglog.closeAll();
  }

  
  onSubmit(form: NgForm) {
    console.log(this.pregunta);
    this._preguntaService.createPregunta(this.pregunta).subscribe(
      response => {

        console.log(response);
        this.getPreguntas(this.pregunta.instrumento_id);

      },
      error => {

      }

    )
    this.pregunta.nombre = null;
    this.pregunta.peso = null;
    form.reset();

  }
  getCurrentInstrumento(id){
    this._instrumentoService.getInstrumento(id).subscribe(
      response =>{
        if(response.instrumento){
         this.instrumento = response.instrumento;
         console.log(this.instrumento);
        }
        

      },
      error =>{

      }
    )
  }

  getPregunta(id :number){
    this._preguntaService.getPregunta(id).subscribe(
      response =>{
        console.log (response);
      },
      error =>{

      }


    )

  }


  getPreguntas(id: number) {
    this._preguntaService.getPreguntas(id).subscribe(
      response => {
       this.preguntas = response.preguntas;
        console.log(this.preguntas);
      },
      error => {

      }
    )

  }
  getErrorMessage(field:string){
    let message;
    if(this.firstFormGroup.get(field).errors.required){
      message = "Se necesita rellenar";
    }
    return message;
  }
  isValidField(field: string, form):boolean{
    return (this.firstFormGroup.get(field).touched || this.firstFormGroup.get(field).dirty || form.submitted ) 
    && !this.firstFormGroup.get(field).valid
  }
  isValidField2(field: string, form):boolean{
    return (this.secondFormGroup.get(field).touched || this.secondFormGroup.get(field).dirty || form.submitted || field == null) 
    && !this.secondFormGroup.get(field).valid
  }

  /*
  
  enableForm(id) {
    if (this.pregunta.pregunta_id = id) {
      this.statussClass = !this.statussClass;

    }
  } */
  



  /*
  updatePregunta(form: NgForm) {
    this.pregunta.nombre = form.value.nombre;
    this.pregunta.peso = form.value.peso;
    this._preguntaService.updatePregunta(this.pregunta).subscribe(
      response => {
        console.log(response);
        this.statussClass = !this.statussClass;

      },
      error => {

      }
    )
    this.pregunta.nombre = null;
    this.pregunta.peso = null;



  }*/




}
