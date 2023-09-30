import { Component, OnInit} from '@angular/core';

import { product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: product[] = []
  total = 0;
  today = new Date(2030,1,1);
  date = new Date(2021,1,21);
  products: product[] = [];

  constructor(
    private storeService:StoreService,
    private productsServices : ProductsService
  ) {
    this.myShoppingCart=this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.productsServices.getAllProducts()
    .subscribe(data => {
      this.products = data
    });
  }
  onAddToShoppingCart(product:product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
