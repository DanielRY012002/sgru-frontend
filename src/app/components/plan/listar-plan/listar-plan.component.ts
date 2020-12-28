import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PlanService } from 'src/app/services/plan/plan.service';
import { UpdatePlanComponent } from '../update-plan/update-plan.component';
import { AddPlanComponent } from '../add-plan/add-plan.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {
  /**planes:any;**/
  planes1:any = new MatTableDataSource();
  constructor(private planService:PlanService,
    private router: Router, private activatedRoute:ActivatedRoute, public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {
    this.listar1();
  }
  ngAfterViewInit() {
    this.planes1.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.planes1.filter = filterValue.trim().toLowerCase();
  }
  delPlan(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.planService.deletePlan(num).subscribe(
          response=>{
        this.listar1()
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )})
      }
      }
    )   
}
  /**public listar():void{
    this.planService.getPlanes().subscribe(
      (data)=>{
      this.planes = data['CURSOR_PLAN'];
      }) 
  }**/
  public listar1():void{
    this.planService.getPlanes1().subscribe(
      (data)=>{
      this.planes1.data = data['CURSOR_LIST_PLAN'];
      }) 
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlanComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listar1();
    });
  }
  openDialogo(n:number): void {
    const dialogRef = this.dialog.open(UpdatePlanComponent, {
      data:{id:n}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listar1();
      console.log('The dialog was closed');
    });
  }
}
