import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _historial:String[] = [];


  get historial():String[]{
    return [...this._historial];
  }

  constructor() { }

  buscarGifs(query:String):void{
    if(this._historial.length<10){
      this._historial.unshift(query);
    }
    else if(this._historial.length==10){
      this._historial.splice(-1,1);
      this._historial.unshift(query);
    }

  }

}
