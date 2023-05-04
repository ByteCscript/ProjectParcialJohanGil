import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { VehiculosFormComponent } from './forms/vehiculos-form/vehiculos-form/vehiculos-form.component';
import { RepuestosFormComponent } from './forms/repuestos-form/repuestos-form/repuestos-form.component';

const routes: Routes = [
  {path:"",component:RepuestosComponent},
  {path:"Repuestos", component:RepuestosComponent},
  {path:"Vehiculos", component:VehiculosComponent},
  {path:"FormVehiculos", component:VehiculosFormComponent},
  {path:"FormRepuestos", component:RepuestosFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
