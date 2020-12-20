import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  accionBack():void{
    this.route.navigate(['menu'])
  }

  pruebita():void{
  }

}
