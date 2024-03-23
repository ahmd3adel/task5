import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from '../test.service';
import { CartCountService } from '../cart-count.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  count : number = 0
constructor(private counter : CartCountService){
}
ngOnInit(){
this.counter.getCounter().subscribe((res) => this.count = res);
}

increaseCount(){
  this.counter.setCounter(this.count + 1)
}

decreaseCount(){
  this.counter.setCounter(this.count - 1)
}
}
