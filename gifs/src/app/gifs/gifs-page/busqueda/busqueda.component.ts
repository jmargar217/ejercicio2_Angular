import { Component, Input, OnInit } from '@angular/core';
import { GifsServiceService } from '../../service/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor(private servicio:GifsServiceService ) { }


  ngOnInit(): void {
  }

  addBusqueda(event:any):void{
    if(event.keyCode=="13"){
        if(!this.servicio.historial.includes(event.target.value))
          this.servicio.buscarGifs(event.target.value);
    }
  }
}
