import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  count : number = 0
constructor(private counter : TestService){
}
ngOnInit(){
this.counter.getCounter().subscribe((res) => this.count = res);
}
}
