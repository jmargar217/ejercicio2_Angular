import { Component, OnInit } from '@angular/core';
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

}
