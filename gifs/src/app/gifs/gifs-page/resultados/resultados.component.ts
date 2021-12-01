import { Component, OnInit } from '@angular/core';
import { Gif } from '../../interface/gif.interface';
import { GifsServiceService } from '../../service/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  constructor(private servicio:GifsServiceService) { }

  ngOnInit(): void {
  }


  obtenerImagenes():Gif[]{
    return this.servicio.imagenes;
  }


}
