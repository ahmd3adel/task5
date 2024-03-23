import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartCountService } from '../cart-count.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  Items: any[] = [];
  counter = 0
  constructor(private cartItems : CartService , private cartCount : CartCountService){
    this.cartCount.getCounter().subscribe((res)=>this.counter = res);
  }
  ngOnInit(){
    this.cartItems.getItems().subscribe((res) => this.Items = res);
    }

    decreaseCounter(id: number) {
      const index = this.Items.findIndex(item => item.id === id);
    
      if (index !== -1) {
        const updatedItem = { ...this.Items[index] };
    
        // Check if quantity is already 1 before decrementing
        if (updatedItem.cartQuantity > 1) {
          updatedItem.cartQuantity--;
        }
    
        this.Items[index] = updatedItem;
      }
    }
    increaseCounter(id: number) {
      const index = this.Items.findIndex(item => item.id === id);
      
      if (index !== -1) {
        const updatedItem = { ...this.Items[index] };
        console.log(updatedItem);
        updatedItem.cartQuantity++;
        this.Items[index] = updatedItem;
      }
    }

   
 

    





}
