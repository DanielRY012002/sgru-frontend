import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Rubricas } from 'src/app/models/rubricas/rubricas';
import { RubricasService } from 'src/app/services/rubricas/rubricas.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-rubrica',
  templateUrl: './registro-rubrica.component.html',
  styleUrls: ['./registro-rubrica.component.css']
})
export class RegistroRubricaComponent implements OnInit {

  control = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  curso: any;
  rubricas: Rubricas[];
  rubricaModel: Rubricas = new Rubricas() ;
  id : any;
  
  constructor(public Rubrica: RubricasService, private router: Router, 
    private activatedRoute: ActivatedRoute, @Inject(MAT_DIALOG_DATA) 
    private data:any, private dialogref: MatDialogRef<RegistroRubricaComponent>) { }

  ngOnInit(): void {
    this.getCurso();
   
    console.log(this.data);
  }
  getCurso() {   
      this.Rubrica.getCurso(this.data.r).subscribe(
        (data) => {
          console.log(data['cursos']);
          this.curso = data['cursos'];
        }
      )
  }
    
  addRubrica() {
   this.Rubrica.postRubrica(this.rubricaModel).subscribe(
     response => {this.dialogref.close();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Guardado Correcto!',
        showConfirmButton: false,
        timer: 1500
      })
     
     })
     
  }
 
}
