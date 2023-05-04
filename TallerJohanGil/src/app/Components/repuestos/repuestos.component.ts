import {  Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {
  

  constructor(public api:ApiService, public tableService: TableService) { }

  async ngOnInit() {
    //llamamos el getAll
    const own = await (this.GetVehiculos())
    this.tableService.setResponseTable(own);

  }

  async GetVehiculos(): Promise<any>{
    var get = await this.api.getAll("Repuestoes")
    return get;
  }
}
