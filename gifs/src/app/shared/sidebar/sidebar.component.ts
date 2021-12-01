import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interface/gif.interface';
import { GifsServiceService } from 'src/app/gifs/service/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private servicio:GifsServiceService ) { }

  ngOnInit(): void {
  }

  getHistorial():String[]{
    return this.servicio.historial;
  }

  getImagenes(event:any):void{
    this.servicio.borrarArrayImgenes();
    let cadena:String = event.target.childNodes[0].nodeValue;
    this.servicio.search(cadena);
  }

}
