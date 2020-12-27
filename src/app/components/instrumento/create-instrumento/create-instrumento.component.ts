import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { Semestre }  from '../../../models/instrumento/semestre';
import { SemestreService } from '../../../services/instrumento/semestre.service';
import { LineaService } from '../../../services/instrumento/linea.service';
import { LineaPlan } from '../../../models/instrumento/linea';
import { Instrumento } from '../../../models/instrumento/instrumento';
import { CompetenciasService }  from '../../../services/instrumento/competencia.service';
import { CicloService } from '../../../services/instrumento/ciclo.service';
import { Ciclo } from '../../../models/instrumento/ciclo';
import { Competencia } from '../../../models/instrumento/competencia';
import { InstrumentoService } from '../../../services/instrumento/instrumento.service';

import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgForm,FormBuilder,Validators, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2'; 



import { EMPTY } from 'rxjs';
import { error } from 'protractor';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-create-instrumento',
  templateUrl: './create-instrumento.component.html',
  styleUrls: ['./create-instrumento.component.css'],
  providers:[
    SemestreService,LineaService,CompetenciasService,CicloService,InstrumentoService,
  {provide: MatFormFieldControl,useExisting:CreateInstrumentoComponent}]
  
})
export class CreateInstrumentoComponent implements OnInit {


  @ViewChild("callDialog") callDialog: TemplateRef<any>;

  public tittle:string;
  public instrumento:Instrumento;
  /**select */
  selectedSem:number = null;
  selectedCl:number = null;
  selectedCi:number = null;
  selectedL:number = null;

  public semestres: Semestre[];
  public linea:LineaPlan[];
  public competencias:Competencia[];
  public ciclos:Ciclo[];
  public instrumentos:Instrumento[];

  public linea_id:number;
  public semestre_id:number;

  //solo para hacer el ng if 
  public cl_id:number;

  instrumentoFormGroup:FormGroup;

  constructor
  (
    private _cicloService:CicloService,
    private _semestreSerive:SemestreService,
    private _lineaService:LineaService,
    private _competenciaService:CompetenciasService,
    private _instrumentoService:InstrumentoService,
    public dialog:MatDialog,
    private fb: FormBuilder


  ) { 
    this.tittle = "Tus formularios"
    this.instrumento = new Instrumento(null,null,null,null,'','',null);
  }

  ngOnInit(): void {
    this.getSemestres();
    this.getLineas(1);
    this.instrumentoFormGroup = this.fb.group({
      
      cl_id:[''],
      semestre_id:[''],
      titulo:['', Validators.required],
      descripcion:['', Validators.required],
      utils_id:['', Validators.required],
      nada : ['']
  
    });
  }

    /*obtener id en select LINEA*/
    onChangeLinea(data){
      if (data){
        this.linea_id = data;
        console.log(this.linea_id);
        this.getCompetencias(this.linea_id);
      }
      
    }
    /*obtener id en select semestre*/
    onChangeSemestre(data){
      if(data)
      this.semestre_id = data;
      this.getCiclos(this.semestre_id);
      this.getInstrumentos(this.semestre_id);
      
    }
    /*obtener id en select CL*/
    onChangeCl(data){
      if (data)
      this.cl_id = data;
  
    }

  
    /**Dialog */
    openDialog(){
      let dialogRef = this.dialog.open(this.callDialog);
      
      dialogRef.afterClosed().subscribe(
        result =>{
          if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
  
        }
      )
    }
  
    onSend(form){  
      if(form.status === 'INVALID')
      {
        // display error in your form
      }else if(this.instrumento.instrumento_id == null){
          console.log(form.value);
          this.instrumento.titulo = form.value.titulo;
          this.instrumento.descripcion = form.value.descripcion;
          this.instrumento.utils_id = form.value.utils_id;
          // this.instrumento = form.value;
          // console.log(this.instrumento);
          this._instrumentoService.createInstrumento(this.instrumento).subscribe(
            response =>{

              console.log(response);
              this.getInstrumentos(response.semestre_id);
              Swal.fire({
                icon: 'success',
                title: 'Instrumento Creando Correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              
            },
            error =>{

            }
            
  
          )
          form.reset();
          this.linea_id = null;
          this.cl_id = null;
          this.dialog.closeAll();
                  // Close opened diaglo
        // do whatever you want to do with your data
      }else if(this.instrumento.instrumento_id !=null){
        this._instrumentoService.updateInstrumento(this.instrumento).subscribe(
          response =>{
              console.log(response);
              this.getInstrumentos(response.semestre_id);
              this.getInstrumentos(response.semestre_id);
              Swal.fire({
                icon: 'success',
                title: 'Editado Correctamente',
                showConfirmButton: false,
                timer: 1500
              })
          },
          error =>{

          }

        )
        form.reset();
        this.instrumento.instrumento_id = null;  
        this.dialog.closeAll();
      }
      
    }
    resetAll(form){
      form.reset();
      this.instrumento.instrumento_id = null;
      this.linea_id = null;
      this.cl_id = null;
      this.dialog.closeAll();
    }
    deleteInstrumento(id){
        console.log(id);

        Swal.fire({
          title: '¿Estas seguro?',
          text: "No podras revertir este cambio",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar'
        }).then((result) => {
          
          if (result.isConfirmed) {

            this._instrumentoService.deleteInstrumento(id).subscribe(
              response =>{
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                console.log(response);
                this._instrumentoService.getInstrumentosxsem(this.semestre_id).subscribe(
                  ({instrumentos}) =>{
                    this.instrumentos = instrumentos;
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
  
  
    /* Servicios */
    getInstrumentos(id:number){
      this._instrumentoService.getInstrumentosxsem(id).subscribe(
        response =>{
          if(response.instrumentos)
          this.instrumentos = response.instrumentos;
          console.log(response.instrumentos);
          
  
        },
        error =>{
  
        }
  
      )
    }
    getInstrumento(id:number){
      this._instrumentoService.getInstrumento(id).subscribe(
        response =>{

            this.instrumento = response.instrumento;
            console.log(this.instrumento);
            
          
            
        },
        error =>{

        }
      )
    }
  
  
  
    getSemestres(){
      this._semestreSerive.getSemestres().subscribe(
        response =>{
          if(response.semestres){
            this.semestres = response.semestres;
            console.log(this.semestres);
          }
        },
        error =>{
  
        }
      );
    }
    getLineas(id:number){
      this._lineaService.getLinea(id).subscribe(
        response => {
          if(response.lineas_plan){
            this.linea =response.lineas_plan
            console.log(this.linea);
          }
  
        },
        error =>{
  
        }
  
  
      )
    }
    getCompetencias(id:number){
      this._competenciaService.getCompetencias(id).subscribe(
        response =>{
          if(response.competencias_linea){
            this.competencias = response.competencias_linea;
            console.log(this.competencias);
          }
        },
        error =>{
  
        }
  
  
      )
    }
    getCiclos(id:number){
      this._cicloService.getCiclo(id).subscribe(
        response =>{
          if(response.ciclos){
            this.ciclos = response.ciclos;
            console.log(this.ciclos);
          }
        },
        error =>{
  
        }
  
      )
  
    }

    getErrorMessage(field:string){
      let message;
      if (this.instrumentoFormGroup.get(field).errors.required){
        message = "Necesitas rellenar este campos";
      }

      return message;

    }

    //validacion de errores
    isValidField(field:string, form){
      return ( 
        
        (this.instrumentoFormGroup.get(field).touched || this.instrumentoFormGroup.get(field).dirty || form.submitted)
      && !this.instrumentoFormGroup.get(field).valid

      )}

}
