import { Component } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
newUser : FormGroup;
constructor(){
  this.newUser = new FormGroup({
    email: new FormControl('' , [Validators.required , Validators.email]),
    name: new FormControl('', [Validators.required , Validators.pattern(/^\S+$/)]),
    password: new FormControl('' , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
    confirm_password: new FormControl('' , [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)])
  })
}

handleRegister(){
  console.log(this.newUser);
}
}
