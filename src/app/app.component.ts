import { Component } from '@angular/core';
import { product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent:string = '';
  showImg= true;

  onLoaded(img: string) {
    console.log('log Padre', img)
  }

  toogleImg(){
    this.showImg = !this.showImg;
  }
}
