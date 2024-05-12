import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  ngOnInit (): void {

  }

  nombreValido (): boolean {
    return this.miFormulario?.controls['producto']?.invalid
      && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido (): boolean {
    return this.miFormulario?.controls['precio']?.touched
      && this.miFormulario?.controls['precion']?.value < 0;
  }

  customDirective () {
    return this.miFormulario?.controls['existencias']?.errors;
  }

  // guardar (miFormulario: NgForm) {
  guardar () {
    console.log(this.miFormulario.controls['producto']?.touched);
  }
}
