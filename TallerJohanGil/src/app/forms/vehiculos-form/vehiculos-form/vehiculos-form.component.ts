import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrls: ['./vehiculos-form.component.css']
})
export class VehiculosFormComponent {
  addressForm = this.fb.group({
    mark: [null, Validators.required],
    color: [null, Validators.required],
    model: [null, Validators.required],
    placa: [null, Validators.required],
    repuestos: [null, Validators.required],
    idVehiculos: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Felicidades',
      'Formulario enviado con éxito.',
      'success'
    )  }
}
