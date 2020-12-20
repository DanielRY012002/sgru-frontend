import { Component, OnInit } from '@angular/core';
import { InformeService } from 'src/app/services/informes/informe.service';

@Component({
  selector: 'app-listinformes',
  templateUrl: './listinformes.component.html',
  styleUrls: ['./listinformes.component.css']
})
export class ListinformesComponent implements OnInit {
  InformesG:boolean=true;
  constructor(private informeService:InformeService) { }

  ngOnInit(): void {
  }


  

}
