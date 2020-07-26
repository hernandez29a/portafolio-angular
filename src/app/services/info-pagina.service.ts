import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  cargada = false;

  equipo:any[] = [];

  constructor(private http: HttpClient) {
    //console.log('Servicio de info de la Pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

   private cargarInfo(){
    //Leer el archivo JSON
    
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina) => {
      /**
       * se indica que la informacion esta cargada 
       * en la variable info se guarda lo que viene del servicio
       */
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
      //console.log(resp.facebook);
    });

  }

  cargarEquipo(){
    this.http.get('https://angular-html-d9526.firebaseio.com/equipo.json')
    .subscribe((resp:any) => {
      /**
       * se indica que la informacion esta cargada 
       * en la variable info se guarda lo que viene del servicio
       */
      this.cargada = true;
      this.equipo = resp;
      //console.log(this.equipo);
      //console.log(resp.facebook);
    });
  }


}
