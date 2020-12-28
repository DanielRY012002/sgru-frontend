import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/models/plan/plan';
import { PlanService } from 'src/app/services/plan/plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
  control = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  control1 = new FormControl('', Validators.required);
  selectFormControl1 = new FormControl('', Validators.required);
  control2 = new FormControl('', Validators.required);
  selectFormControl2 = new FormControl('', Validators.required);
  fac:boolean;
  prog:boolean;
  campus:any[];
  facultades:any;
  programas:any;
  planModel:Plan = new Plan();
  constructor(private planService:PlanService,
    private router: Router, private activatedRoute:ActivatedRoute, public dialogRef: MatDialogRef<AddPlanComponent>) { }

  ngOnInit(): void {
    this.listCampus();
  }
  public create():void{
    console.log(this.planModel)
    this.planService.addPlan(this.planModel).subscribe(
      response=>{
        this.dialogRef.close();
      Swal.fire('Nuevo Plan', `Plan ${this.planModel.nombre} creado con exito`,"success")}
    )
  } 
  listCampus(): void{
    this.planService.getCampus().subscribe(data=>this.campus=data["CURSOR_CAMPUS"]);
  }
  getfacultades(id:number):void{
    this.planService.getFacultades(id).subscribe(data=>{this.facultades=data["CURSOR_CAM_F"]; console.log(this.facultades)});
    this.fac=true;
  }
  getprogramas(id:number):void{
    this.planService.getPa(id).subscribe(data=>{this.programas=data["CURSOR_FAC_PA"]; console.log(this.programas)});
    this.prog=true;
  }
}
