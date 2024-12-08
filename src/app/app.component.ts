//Importamos las librerias
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

//MetaData del Componente
@Component({
  //Llamar a nuestro componente
  selector: 'app-root',
  //Template del componente
  imports: [RouterOutlet, RouterLink],
  //Llamar la plantilla del componente
  templateUrl: './app.component.html',
  //Llamar a los distintos archivos de estilos CSS
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // Variables del componente
  menuOption:string = ''
  
  // Metodos del componente
  onOption (menuOption:string){
    this.menuOption = menuOption
  }
}
