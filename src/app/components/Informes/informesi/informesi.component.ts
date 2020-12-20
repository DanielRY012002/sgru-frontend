import { Component, OnInit } from '@angular/core';
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
  constructor(private informeService:InformeService) { }
  displayedColumns:string[]=['CE','NOMBRES','APELLIDOS','LINK'];

  ngOnInit(): void {
    this.listInformesUAC();
  }

  listInformeIndividuales(id,id2,id3):void{
    this.informeService.getInformesIndividuales(id,id2,id3).subscribe(data=>this.InformesIndividuales=data['CURSOR_INFORME']);
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
}
