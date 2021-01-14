import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

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

  private _productsUrl : string = '../assets/products.json';

  /**
   * getProducts
   */
  public getProducts() {
    return this._http.get(this._productsUrl);
  }

  /**
   * getAlbum
   */
  public getAlbum(id : number):Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }
  

}
