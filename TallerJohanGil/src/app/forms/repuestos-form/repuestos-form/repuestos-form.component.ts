import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repuestos-form',
  templateUrl: './repuestos-form.component.html',
  styleUrls: ['./repuestos-form.component.css']
})
export class RepuestosFormComponent {
  addressForm = this.fb.group({
  
    idRepuestos: [null, Validators.required],
    valor: [null, Validators.required],
    idVehiculos: [null, Validators.required],
    tipo: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}
