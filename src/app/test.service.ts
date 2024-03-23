import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
private counter = new BehaviorSubject<number>(10);
  constructor() { }
  getCounter(){
  return this.counter.asObservable();
  }
  setCounter(newValue : any){
    return this.counter.next(newValue);
  }
}
