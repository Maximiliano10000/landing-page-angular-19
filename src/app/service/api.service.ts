// Importamos las librerias necesarias 
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProducto } from "../models/product.models";

//MetaData del injectable
@Injectable({
    providedIn: 'root'
})

export class ApiService{
    // URL de la API
    private _http = inject(HttpClient);
    private urlBase:string = 'https://fakestoreapi.com/products';

    // Metodo para obtener todos los productos
    getProducts(): Observable<IProducto[]>{
        return this._http.get<IProducto[]>(`${this.urlBase}`);
    }

    // Metodo para obtener un producto por id
    getProduct(id: number): Observable<IProducto>{
        return this._http.get<IProducto>(`${this.urlBase}/${id}`);
    }
}