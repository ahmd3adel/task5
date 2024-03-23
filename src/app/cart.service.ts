import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  addToCart(product: any) {
    const currentValue = this.cartItems.value;

    // Check if the product already exists in the cart
    const existingProductIndex = currentValue.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const existingProduct = currentValue[existingProductIndex];
      existingProduct.cartQuantity = existingProduct.cartQuantity + 1;
    } else {
      // If the product is new, add it with a default quantity of 1
      const newProduct = { ...product, cartQuantity: 1 };
      currentValue.push(newProduct);
    }

    this.cartItems.next(currentValue);
    console.log(currentValue);
  }

  removeItem(id: number) {
    const currentValue = this.cartItems.value;

    // Find the index of the item with the provided id
    const index = currentValue.findIndex(item => item.id === id);

    if (index !== -1) {
      // Remove the item from the array
      currentValue.splice(index, 1);
      // Emit updated cart data
      this.cartItems.next(currentValue);
      console.log(currentValue);
    }
  }

  getItems() {
    return this.cartItems.asObservable();
  }
}
