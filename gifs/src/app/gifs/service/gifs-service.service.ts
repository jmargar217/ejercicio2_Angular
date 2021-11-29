import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _historial:String[] = ["brenes","mairena","alcala "];


  get historial():String[]{
    return [...this._historial];
  }

  constructor() { }

  buscarGifs(query:String):void{
    this._historial.unshift(query);
  }

}
