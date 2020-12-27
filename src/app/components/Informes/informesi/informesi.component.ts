import { Component, OnInit } from '@angular/core';
import { Informe } from 'src/app/models/informes/informe';
import { InformeService } from 'src/app/services/informes/informe.service';

@Component({
  selector: 'app-informesi',
  templateUrl: './informesi.component.html',
  styleUrls: ['./informesi.component.css']
})
export class InformesiComponent implements OnInit {
  InformesIndividuales:any[];
  uac:any[];
  uaf:any[];
  uapa:any[];
  s:any[];
  c:any[];
  informe:Informe= new Informe();
  constructor(private informeService:InformeService) { }
  displayedColumns:string[]=['CE','NOMBRES','APELLIDOS','LINK'];

  ngOnInit(): void {
    this.listInformesUAC();
  }

  listInformeIndividuales():void{
    this.informeService.getInformesIndividuales(this.informe.ua_id,this.informe.semestre_id,this.informe.utils_id).subscribe(data=>{
      this.InformesIndividuales=data['CURSOR_INFORME'];
      console.log(this.InformesIndividuales)
    });
  }
  listInformesUAC():void{
    this.informeService.getInformesUAC().subscribe(data=>this.uac=data['CURSOR_UA']);
  }
  listInformesUAF(n:number):void{
    this.informeService.getInformesUAF(n).subscribe(data=>this.uaf=data['CURSOR_UA']);
    console.log(n);
  }
  listInformesUAPA(n:number):void{
    this.informeService.getInformesUAPA(n).subscribe(data=>this.uapa=data['CURSOR_UA']);
  }
  listInformesS(n:number):void{
    this.informeService.getInformesS(n).subscribe(data=>this.s=data['CURSOR_S']);
  }
  listInformesC(n:number):void{
    this.informeService.getInformeC(n).subscribe(data=>this.c=data['CURSOR_C']);
  }

  
}
