import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LarryTech';
  formulario = new FormGroup({
    numeroOrden: new FormControl('', Validators.required),
    fechaRecepcion: new FormControl('', Validators.required),
    cliente: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]),
    rut: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    equipo: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    numeroSerie: new FormControl('', Validators.required),
    desperfeccion: new FormControl('', Validators.required),
    diagnostico: new FormControl('', Validators.required),
    modoPago: new FormControl('', Validators.required),
    abono: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
    valorTotal: new FormControl('', Validators.required),
    fechaEntrega: new FormControl('', Validators.required),
  });


  onSubmit() {
    console.warn(this.formulario.value)
  }

}
