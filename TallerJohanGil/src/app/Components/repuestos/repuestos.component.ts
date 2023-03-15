import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {
  

  constructor(public api:ApiService){ 
    
  }

  ngOnInit(): void {
    //llamamos el getAll
    var response = this.api.getAll("Repuestoes")
    console.log(response);
    
  }
}
