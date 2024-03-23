import { Component } from '@angular/core';
import { CartCountService } from '../cart-count.service';

@Component({
  selector: 'app-cart-count',
  standalone: true,
  imports: [],
  templateUrl: './cart-count.component.html',
  styleUrl: './cart-count.component.css'
})
export class CartCountComponent {
  counter = 0
constructor(private cartCount : CartCountService){
this.cartCount.getCounter().subscribe((res)=>this.counter = res);
}

increaseCounter(){
  this.cartCount.setCounter(this.counter + 1);
}

decreaseCounter(){
  this.cartCount.setCounter(this.counter - 1);
}


}
