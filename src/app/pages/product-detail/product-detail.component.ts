import { IProducto } from './../../models/product.models';
//Importamos las librerias
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';

//MetaData del Componente
@Component({
  //Llamar a nuestro componente
  selector: 'app-product-detail',
  //Llamar la plantilla del componente
  templateUrl: './product-detail.component.html',
  //Llamar a los distintos archivos de estilos CSS
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  // Declarar variables
  loading: boolean = false;
  public product?: IProducto;

  // Inyectar el servicio
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  
  // Variables para el componente
  ngOnInit(): void {
       this._route.params.subscribe (params => {
        this._apiService.getProduct(params['id']).subscribe((data: IProducto) => {
          this.product = data;
          this.loading = false;
          });
       })
  }
}