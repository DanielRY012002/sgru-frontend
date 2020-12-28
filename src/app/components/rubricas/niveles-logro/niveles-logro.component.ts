import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterio } from 'src/app/models/rubricas/criterios';
import { Nivellogro } from 'src/app/models/rubricas/nivellogro';
import { RubricasService } from 'src/app/services/rubricas/rubricas.service';


@Component({
  selector: 'app-niveles-logro',
  templateUrl: './niveles-logro.component.html',
  styleUrls: ['./niveles-logro.component.css']
})
export class NivelesLogroComponent implements OnInit {
  id: any;
  infoCriterio: any;
  constructor(public Rubrica: RubricasService, private router: Router, 
    private activatedRoute: ActivatedRoute) { }
  criterios: Criterio[];
  niveles : Nivellogro[];
  nivel : any;
  ngOnInit(): void {
    this.getInfoCriterio();
    this.getSelectNivel();
    this.getAllNivel();
  }
  getInfoCriterio() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.Rubrica.getNivel(this.id).subscribe(
        (data) => {
          console.log(data['indicador']);
          this.infoCriterio = data['indicador'];
        }
      )
    })
  }
  getSelectNivel() {
    this.Rubrica.getNivelesLogro().subscribe(
      (data) => {
        this.Rubrica.niveles = data['niveles_logro'] as Criterio[];
      }
    )
  }
  getAllNivel() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.Rubrica.getAllNivelLogro(this.id).subscribe(
        (data)=>{
            this.nivel = data['niveles_rubrica'] as Nivellogro[];
            console.log("NIVELES : " + this.nivel);
        }
      )
    }
    )
  }
}
