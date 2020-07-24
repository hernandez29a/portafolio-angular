import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //variable para obtener el año en curso
  anio:number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
