import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent:string = '';
  onLoaded(img: string) {
    console.log('log Padre', img)
  }
}
