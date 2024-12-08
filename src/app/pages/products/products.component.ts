//Importamos las librerias
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { IProducto } from '../../models/product.models';

//MetaData del Componente
@Component({
  //Llamar a nuestro componente
  selector: 'app-products',
  //Llamar la plantilla del componente
  templateUrl: './products.component.html',
  //Llamar a los distintos archivos de estilos CSS
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  // Variable para almacenar los datos de la API
  productList: IProducto [] = []
  // Declarar variables que va a injectar el servicio
  private _apiService = inject(ApiService);
  private _router = inject(Router) 

  ngOnInit(): void {
    //Llamamos al servicio para obtener los datos de la API
    this._apiService.getProducts().subscribe((data: IProducto[]) => {
      console.log(data)
      //Almacenamos los datos en la variable productList
      this.productList = data;
    });
  }

  // Metodo para obtener el producto seleccionado
  navegate (id: number){
    this._router.navigate(['/products', id])
  }
}