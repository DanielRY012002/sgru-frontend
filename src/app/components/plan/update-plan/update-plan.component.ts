import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/models/plan/plan';
import { PlanService } from 'src/app/services/plan/plan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-plan',
  templateUrl: './update-plan.component.html',
  styleUrls: ['./update-plan.component.css']
})
export class UpdatePlanComponent implements OnInit {
  planes: any;
  plan: Plan = new Plan();
  constructor(private planService: PlanService,
    private router: Router, private activatedRoute: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdatePlanComponent>) { }

  ngOnInit(): void {
    console.log(this.data.id)
    this.cargarPlan();
  }
  cargarPlan(): void {
    this.planService.getPlan(this.data.id).subscribe(
      (data) => {
        this.planes = data['CURSOR_PLAN']
        console.log(this.planes)
        this.plan.ua_id = this.planes[0].UA_ID;
        this.plan.nombre = this.planes[0].NOMBRE;
        this.plan.f_ini = this.planes[0].F_INI;
        this.plan.f_fin = this.planes[0].F_FIN;
        this.plan.plan_id = this.data.id;
      })
  }
  modificarPlan(): void {
    console.log(this.plan)
    this.planService.updatePlan(this.plan).subscribe(
      response => {
        console.log(this.plan)
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
