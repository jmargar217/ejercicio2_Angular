import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsInterface, Type } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _historial:String[] = [];
  private _giphies:Gif[] = [];

  private apiKey:string = "l5jV3GFa2cEACO0MfDWLp8ZHbR0Q5PYy";
  private link = "http://api.giphy.com/v1/gifs/search?q=";


  get historial():String[]{
    return [...this._historial];
  }

  get imagenes():Gif[]{
    return [...this._giphies];
  }

  constructor(private http:HttpClient) {}

  buscarGifs(query:String):void{
    if(this._historial.length<10){
      this._historial.unshift(query);
      this.search(query);

      localStorage.setItem("historial",JSON.stringify(this.historial));
    }
    else if(this._historial.length==10){
      this._historial.splice(-1,1);
      this._historial.unshift(query);
      this.search(query);
    }

  }

  search(query:String):void{
    let datosObtenidos:any;
    this.http.get<SearchGifsInterface>(this.link+query+"&api_key="+this.apiKey+"&limit=10").subscribe(datos => {
      datosObtenidos = datos.data;

      for(let i=0; i<datosObtenidos.length;i++){
        this._giphies.push(datosObtenidos[i]);
      }

      localStorage.setItem("imagenes",JSON.stringify(this.imagenes));

     });

  }

  borrarArrayImgenes():void{
    this._giphies = [];
  }

}
