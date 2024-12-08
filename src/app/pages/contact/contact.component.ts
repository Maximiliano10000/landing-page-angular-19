//Importamos las librerias
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

//MetaData del Componente
@Component({
  //Llamar a nuestro componente
  selector: 'app-contact',
  //Llamar la plantilla del componente
  templateUrl: './contact.component.html',
  //Llamar a los distintos archivos de estilos CSS
  styleUrl: './contact.component.css',
  imports: [CommonModule, ReactiveFormsModule, NgClass]
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;

  // Constructor del "email" y "message" 
  constructor (private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  // Prevenir que se reinicie
  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  hasErrors (field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }
}