import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';

const routes: Routes = [
  {path:"",component:RepuestosComponent},
  {path:"Repuestos", component:RepuestosComponent},
  {path:"Vehiculos", component:VehiculosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
