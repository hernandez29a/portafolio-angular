import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando= true;
  productos:Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    /** 
     * primero se deben cargar todos los registros para luego proceder con la busqueda 
     * creamos una promera para resolver este problema 
     */
    return new Promise( (resolve,rejects)=> {

      this.http.get('https://angular-html-d9526.firebaseio.com/productos_idx.json')
      .subscribe((resp:Producto[]) => {
        //console.log(resp);
        this.cargando= false;
        this.productos = resp;
        resolve();
      });

    });

  }

  getProducto(id:string){
    return this.http.get('https://angular-html-d9526.firebaseio.com/productos/' + id + '.json');
  }

  buscarProducto(termino:string){

    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then( () => {
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar el filtro
      this.filtrarProductos(termino);
    }
   
  }

  private filtrarProductos(termino: string){

    //console.log(this.productos);
    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      
      const titulower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino) >=0 || titulower.indexOf( termino ) >= 0 ){
        this.productoFiltrado.push(prod);
      }

    });

     
  }
}
