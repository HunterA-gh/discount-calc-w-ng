import { Component } from '@angular/core';
import {FormControl, NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discount Calculator';

 finalPrice = new FormControl('');

  calculate(initialPrice: number, percentOff: number) {
    if (initialPrice <= 0 || percentOff <= 0 || percentOff > 100) {
      this.finalPrice.setValue("Fill in valid numbers")
    } else {
      this.finalPrice.setValue("$" +(initialPrice * (1 - (percentOff * 0.01))).toFixed(2).toString());
    }
  }
}
