import { Injectable } from '@angular/core';
import { product } from '../models/product.model';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: product[] = []
  private myCart = new BehaviorSubject<product[]>([]);

  myCart$ = this.myCart.asObservable();

  addProduct(product:product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart)
  }

  getMyShoppingCart() {
    return this.myShoppingCart
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum,item) => sum + item.price, 0);
  }

  constructor() { }
}
