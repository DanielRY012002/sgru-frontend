import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plancurso } from 'src/app/models/plancurso/plancurso';
import { PlancursoService } from 'src/app/services/plancurso/plancurso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-plancurso',
  templateUrl: './update-plancurso.component.html',
  styleUrls: ['./update-plancurso.component.css']
})
export class UpdatePlancursoComponent implements OnInit {
  planescursos: any;
  plancurso: Plancurso = new Plancurso();
  planes: any[];
  cursos: any[];
  ciclos: any[];
  plancursoModel:Plancurso = new Plancurso();
  constructor(private plancursoService: PlancursoService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdatePlancursoComponent>) { }

  ngOnInit(): void {
    console.log(this.data.id)
    this.cargarPlancurso();
    this.listplanes()
    this.listcursos()
    this.listciclos()
  }
  cargarPlancurso(): void {
    this.plancursoService.getPlancurso(this.data.id).subscribe(
      (data) => {
        this.planescursos = data['CURSOR_PLAN_CURSO']
        console.log(this.planescursos)
        this.plancurso.plan_id = this.planescursos[0].PLAN_ID;
        this.plancurso.utils_id = this.planescursos[0].UTILS_ID;
        this.plancurso.curso_id = this.planescursos[0].CURSO_ID;
        this.plancurso.plan_curso_id = this.data.id;
      })
  }
  modificarPlancurso(): void {
    console.log(this.plancurso)
    this.plancursoService.updatePlancurso(this.plancurso).subscribe(
      response => {
        console.log(this.plancurso)
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
              'La Asignacion ha sido Modificada.',
              'success'
            )
          }
        })
      })
  }
  listplanes(): void{
    this.plancursoService.getPlanes2().subscribe(data=>this.planes=data["CURSOR_PL"]);
  }
  listcursos(): void{
    this.plancursoService.getCursos().subscribe(data=>this.cursos=data["CURSOR_CUR"]);
  }
  listciclos(): void{
    this.plancursoService.getCiclo().subscribe(data=>this.ciclos=data["CURSOR_CICLO"]);
  }
}
