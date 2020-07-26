import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  cargando= true;
  producto : ProductoDescripcion;
  id:string;

  constructor(public route: ActivatedRoute,
              public _productoService: ProductosService ) { }
  


  ngOnInit() {
    this.route.params
      .subscribe( parametros => {

        //console.log(parametros['id']);

        this._productoService.getProducto(parametros['id'])
          .subscribe( (producto:ProductoDescripcion) => {
            //this.cargando = false;
            //obtenemos el id del producto que viene del servicio
            this.id = parametros['id'];
            //obtenemos el producto que estamos recibiendo de la bd
            this.producto = producto;
            //console.log(producto);
          });


      });
  }

  

}
