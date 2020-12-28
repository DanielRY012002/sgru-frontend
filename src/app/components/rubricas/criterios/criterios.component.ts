import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterio } from 'src/app/models/rubricas/criterios';
import { RubricasService } from 'src/app/services/rubricas/rubricas.service';

import Swal from 'sweetalert2';
import { NivelesLogroComponent } from '../niveles-logro/niveles-logro.component';

@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.css']
})
export class CriteriosComponent implements OnInit {
  criterio: Criterio[];
  rubrica: any;
  hola:any;
  
  constructor(public Rubrica: RubricasService, private router: Router, 
    private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }
    id: any;
  ngOnInit(): void {
    this.getRubrica();
    this.getInfoRubrica();
    this.activatedRoute.params.subscribe(params=> this.hola = params["r"]);
    
  }
  getRubrica() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.Rubrica.getIndicadores(this.id).subscribe(
        (data) => {
          console.log(data['indicadores'])
          this.Rubrica.criterio = data['indicadores'] as Criterio[];
        }
      )
    });
  }
  getInfoRubrica() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.Rubrica.getIndicador(this.id).subscribe(
        (data) => {
          console.log(data['rubrica'])
          this.rubrica = data['rubrica'];

        }
      )
    });
  }
  addCriterio(form: NgForm) {
    console.log(form.value);
    this.Rubrica.postIndicadores(form.value).subscribe(
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
  openDialog(): void {
    let dialogRef = this.dialog.open(NivelesLogroComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getRubrica();
    });
  } 
}
