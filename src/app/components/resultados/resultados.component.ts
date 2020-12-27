import { Component, OnInit,ViewChild } from '@angular/core';
import { Estudiante } from '../../models/instrumento/estudiante';
import { Conf_py } from '../../models/instrumento/conf_py';
import { Conf_evaluacion } from '../../models/instrumento/conf_evaluacion';
import { Semestre } from '../../models/instrumento/semestre';
import { ResultadoService } from '../../services/instrumento/resultado.service';
import { SemestreService } from '../../services/instrumento/semestre.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  

  semestreNombre;
  public semestre:Semestre;
  public semestres:Semestre[];
  public estudiantes:Estudiante[] = [];
  public conf_py: Conf_py[];
  public conf_evaluacion: Conf_evaluacion[];

  dataSource = new MatTableDataSource<Estudiante>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns:string[] = ['index','nombres', 'apellidos', 'codigo_estudiante', 'correo_insti'];

  constructor(
    private _resultadoService:ResultadoService,
    private _semestreSerive:SemestreService

  ) { 
    this.semestre = new Semestre(null,'',null);
   }

  ngOnInit(): void {
    this.getSemestres();
    this.getEstudiantes();

    
    
    
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getSemestres(){
    this._semestreSerive.getSemestres().subscribe(
      ({semestres}:any) =>{
        this.semestres = semestres;

      },
      error =>{

      }
    )

  }
  onChangeSemestre(e:any){
    if(e){
      this.getConf_py(e);

    }
  }
  getEstudiantes(){
    this._resultadoService.getEstudiantes().subscribe(
      ({estudiantes}:any) =>{
        this.dataSource.data = estudiantes;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.estudiantes);
      },
      error =>{

      }
    )
  }
  getConf_py(nombre:string){
    this._resultadoService.getConf_py(nombre).subscribe(
      ({conf_py}:any) =>{
        this.conf_py = conf_py;
      },
      error =>{

      }
    )
  }

  

}

