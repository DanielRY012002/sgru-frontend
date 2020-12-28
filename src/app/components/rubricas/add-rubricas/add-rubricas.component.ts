import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/models/rubricas/cursos';
import { Rubricas } from 'src/app/models/rubricas/rubricas';
import { RubricasService } from 'src/app/services/rubricas/rubricas.service';

import Swal from 'sweetalert2';
import { RegistroRubricaComponent } from '../registro-rubrica/registro-rubrica.component';

@Component({
  selector: 'app-add-rubricas',
  templateUrl: './add-rubricas.component.html',
  styleUrls: ['./add-rubricas.component.css']
})
export class AddRubricasComponent implements OnInit {
  curso: Cursos[];
  rubricas: Rubricas[];
  py_carga_id: any;
  id : any;
  constructor(public Rubrica: RubricasService, private router: Router, private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurso();
    this.getRubrica();
  }
  getCurso() {
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
      console.log( this.id);
      this.Rubrica.getCurso( this.id).subscribe(
        (data) => {
          console.log(data['cursos']);
          this.Rubrica.curso = data['cursos'] as Cursos[];
        }
      )
    });
  }
  getRubrica() {
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
      console.log(this.id);
      this.Rubrica.getRubrica(this.id).subscribe(
        (data) => {
          this.Rubrica.rubrica = data['rubricas'] as Rubricas[];
        }
      )
    })
  }
  ChooseCurso(value) {
    this.py_carga_id = value;
  }
  addRubrica(form: NgForm) {
    this.Rubrica.postRubrica(form.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado Correcto!',
          showConfirmButton: false,
          timer: 1500
        })
        this.getRubrica();
      }
    )
  }
  delrubrica(num:number):void {
    Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar'
      }).then ((result)=> {
        if ( result.isConfirmed){
          this.getRubrica()
          Swal.fire(
            'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
        }
        this.Rubrica.deleterubrica(num).subscribe(
          response=>{}
        )
      })
      }
      openDialog(): void {
        let id:number;
        this.activatedRoute.params.subscribe(params =>     
          { id=params['id']
         console.log(id)})
         
        let dialogRef = this.dialog.open(RegistroRubricaComponent, {
          data:{r:id}
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.getRubrica();
        });
      } 
recriterios(n:number):void{
  let id:number;
  this.activatedRoute.params.subscribe(params => id=params['id'])  
  this.router.navigate( 
    ['/rubricas/indicador/', n, 
  {r:id}] 
   
  )
}
returid():number{
  let id:number;
  this.activatedRoute.params.subscribe(params => id= params['id'])
  return id;
}
}
