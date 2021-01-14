import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductngService {

  _productsUrl : string = '../assets/products.json';

  constructor() { }

  getProducts() {
   
  }

}
