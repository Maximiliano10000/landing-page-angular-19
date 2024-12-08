//Importamos las librerias
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//MetaData del Componente
@Component({
  //Llamar a nuestro componente
  selector: 'app-home',
  //Llamar la plantilla del componente
  templateUrl: './home.component.html',
  //Llamar a los distintos archivos de estilos CSS
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'curso-angular-youtube';
}