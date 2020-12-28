import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso/curso';
import { CursoService } from 'src/app/services/curso/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrls: ['./update-curso.component.css']
})
export class UpdateCursoComponent implements OnInit {
  cursos: any;  
  curso:Curso=new Curso();
  constructor(private cursoService:CursoService,
    private router: Router, private activatedRoute:ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateCursoComponent>) { }

  ngOnInit(): void {
    console.log(this.data.id)
    this.cargarCurso();
  }
  cargarCurso():void{
    this.cursoService.getCurso(this.data.id).subscribe(
        (data) => {
          this.cursos=data['CURSOR_CURSO'] 
          console.log(this.cursos)
          this.curso.nombre=this.cursos[0].NOMBRE;
          this.curso.cr=this.cursos[0].CR;
          this.curso.ht=this.cursos[0].HT;
          this.curso.hp=this.cursos[0].HP;
          this.curso.curso_id=this.data.id;
        })
      }
  modificarCurso():void{
    this.cursoService.updateCurso(this.curso).subscribe(
      response=>{
        console.log(this.curso)
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.dialogRef.close();
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }
}
