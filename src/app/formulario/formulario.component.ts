import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
constructor(private firestore: Firestore) {}

title = 'LarryTech';
  isSubmited = false;
  formulario = new FormGroup({
    numeroOrden: new FormControl('', Validators.required),
    fechaRecepcion: new FormControl('', Validators.required),
    cliente: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]),
    rut: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    equipo: new FormGroup({
      equipoPc: new FormControl(false),
      equipoNotebook: new FormControl(false),
      equipoImpresora: new FormControl(false),
    }, [this.validarEquipo()]),
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    numeroSerie: new FormControl('', Validators.required),
    desperfeccion: new FormControl('', Validators.required),
    diagnostico: new FormControl('', Validators.required),
    modoPago: new FormGroup({
      redCompra: new FormControl(false),
      masterCard: new FormControl(false),
      visa: new FormControl(false),
      efectivo: new FormControl(false)
    }, [this.validarModoPago()]),
    abono: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
    valorTotal: new FormControl('', Validators.required),
    fechaEntrega: new FormControl('', Validators.required),
  });


  async onSubmit() {
  if (this.formulario.valid) {
      try {
        const coleccion = collection(this.firestore, 'fichas');
        await addDoc(coleccion, this.formulario.value);
        console.log('Ficha guardada correctamente');
        this.formulario.reset();
      } catch (error) {
        console.error('Error al guardar la ficha:', error);
      }
    } else {
      console.warn('Formulario inválido');
      this.formulario.markAllAsTouched();
    }
  }

  validarEquipo(): ValidatorFn{
    return(control : AbstractControl): ValidationErrors | null =>{
      const pc = control.get("equipoPc")?.value;
      const notebook = control.get("equipoNotebook")?.value
      const impresora = control.get("equipoImpresora")?.value

      if (pc || notebook || impresora) {
        return null;
      }

      return {sinEquipos: true}
    }
  }

  validarModoPago(): ValidatorFn{
    return(control: AbstractControl): ValidationErrors | null =>{
      const redCompra = control.get("redCompra")?.value;
      const masterCard = control.get("masterCard")?.value;
      const visa = control.get("visa")?.value;
      const efectivo = control.get("efectivo")?.value;

      if (redCompra || masterCard || visa || efectivo) {
        return null;
      }

      return {sinPago: true}
    }
  }

  validarCampo(campo: string){
    const control = this.formulario.get(campo);
    if(!control) return '';

    if ((control.dirty || control.touched) && control.invalid){
      return 'invalid';
    }

    if((control.dirty || control.touched) && control.valid){
      return 'valid';
    }

    return '';
  }

  validarError(campo: string){
    const control = this.formulario.get(campo);
    if(!control) return '';

    if ((control.dirty || control.touched) && control.invalid){
      return true;
    }

    if((control.dirty || control.touched) && control.valid){
      return false;
    }

    return '';
  }
}
