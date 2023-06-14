import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string | any;
  email: string| any;
  phone: string| any;
  password: string| any;

  signUp() {
    // Implement the signup functionality here
    console.log('Sign up clicked!');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Password:', this.password);
  }
}
