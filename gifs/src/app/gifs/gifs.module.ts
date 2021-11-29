import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs-page/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs-page/resultados/resultados.component';
import { GifsServiceService } from './service/gifs-service.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent

  ],
  exports: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GifsServiceService
  ]
})
export class GifsModule { }
