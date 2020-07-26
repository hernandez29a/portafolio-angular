import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //variable para obtener el año en curso
  anio:number = new Date().getFullYear();

  constructor(public _infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
