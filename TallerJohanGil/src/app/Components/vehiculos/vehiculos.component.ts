import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  

  constructor(public api:ApiService, public tableService: TableService) { }

  async ngOnInit() {
    //llamamos el getAll
    const own = await (this.GetVehiculos())
    this.tableService.setResponseTable(own);

  }

  async GetVehiculos(): Promise<any>{
    var get = await this.api.getAll("Vehiculoes")
    return get;
  }

}