import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

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
  

}
