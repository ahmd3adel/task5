import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {
private cartCount = new BehaviorSubject<number>(1);
  constructor() { }

  getCounter(){
    return this.cartCount.asObservable();
  }
  setCounter(newValue : any){
    return this.cartCount.next(newValue);
  }
}
