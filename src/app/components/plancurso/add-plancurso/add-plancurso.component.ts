import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Plancurso } from 'src/app/models/plancurso/plancurso';
import { PlancursoService } from 'src/app/services/plancurso/plancurso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-plancurso',
  templateUrl: './add-plancurso.component.html',
  styleUrls: ['./add-plancurso.component.css']
})
export class AddPlancursoComponent implements OnInit {
  control = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  control1 = new FormControl('', Validators.required);
  selectFormControl1 = new FormControl('', Validators.required);
  control2 = new FormControl('', Validators.required);
  selectFormControl2 = new FormControl('', Validators.required);
  control3 = new FormControl('', Validators.required);
  selectFormControl3 = new FormControl('', Validators.required);
  control4 = new FormControl('', Validators.required);
  selectFormControl4 = new FormControl('', Validators.required);
  control5 = new FormControl('', Validators.required);
  selectFormControl5 = new FormControl('', Validators.required);
  planes: any[];
  cursos: any[];
  ciclos: any[];
  fac:boolean;
  prog:boolean;
  pla:boolean;
  campus:any[];
  facultades:any;
  programas:any;
  planes2:any;
  plancursoModel:Plancurso = new Plancurso();
  constructor(private plancursoService: PlancursoService,
    private router: Router, private activatedRoute: ActivatedRoute, public dialogRef: MatDialogRef<AddPlancursoComponent>) { }

  ngOnInit(): void {
    this.listcursos()
    this.listciclos()
    this.listCampus();
  }
  public create():void{
    console.log(this.plancursoModel)
    this.plancursoService.addPlancurso(this.plancursoModel).subscribe(
      response=>{
        this.dialogRef.close();
      Swal.fire('Asignacion del curso al plan realizado con exito',"success")}
    )
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
  listCampus(): void{
    this.plancursoService.getCampus().subscribe(data=>this.campus=data["CURSOR_CAMPUS"]);
  }
  getfacultades(id:number):void{
    this.plancursoService.getFacultades(id).subscribe(data=>{this.facultades=data["CURSOR_CAM_F"]; console.log(this.facultades)});
    this.fac=true;
  }
  getprogramas(id:number):void{
    this.plancursoService.getPa(id).subscribe(data=>{this.programas=data["CURSOR_FAC_PA"]; console.log(this.programas)});
    this.prog=true;
  }
  getplanes(id:number):void{
    this.plancursoService.getPlanes3(id).subscribe(data=>{this.planes2=data["CURSOR_PA_PLAN"]; console.log(this.planes2)});
    this.pla=true;
  }
}
