import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map} from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private _http: Http) { }
  
  private _albumUrl : string = '../assets/album.json';
  public get value() : string {
    return this._albumUrl;
  }
  public set value(v : string) {
    this._albumUrl = v;
  }

  /**
   * getAlbum
   */
  public getAlbum(id : number) {
    return this._http.get(this._albumUrl).map(response => response.json());
  }
  

}
