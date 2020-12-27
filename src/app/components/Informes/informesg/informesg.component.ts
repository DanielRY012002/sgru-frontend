import { Component, OnInit } from '@angular/core';
import { InformeService } from 'src/app/services/informes/informe.service';

@Component({
  selector: 'app-informesg',
  templateUrl: './informesg.component.html',
  styleUrls: ['./informesg.component.css']
})
export class InformesgComponent implements OnInit {
  InformesGenerales: any[]
  constructor(private informeService:InformeService) { }

  ngOnInit(): void {
  }
  listInformesGenerales(id: number, id2: number): void {
    this.informeService.getInformesGenerales(id, id2).subscribe(data => this.InformesGenerales = data['CURSOR_INFORME']);
  }

}
