import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../service/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor(private servicio:GifsServiceService ) { }

  ngOnInit(): void {
  }

  addBusqueda():void{
    this.servicio.buscarGifs("prueba");
  }



}
