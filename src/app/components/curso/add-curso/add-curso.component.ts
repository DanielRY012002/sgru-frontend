import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso/curso';
import { CursoService } from 'src/app/services/curso/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
  cursoModel:Curso = new Curso();
  constructor(private cursoService:CursoService,
    private router: Router, private activatedRoute:ActivatedRoute, public dialogRef: MatDialogRef<AddCursoComponent>) { }

  ngOnInit(): void {
  }
  public create():void{
    console.log(this.cursoModel)
    this.cursoService.addCurso(this.cursoModel).subscribe(
      response=>{
        this.dialogRef.close();
      Swal.fire('Nuevo Curso', `Curso ${this.cursoModel.nombre} creado con exito`,"success")}
    )
  } 
}
