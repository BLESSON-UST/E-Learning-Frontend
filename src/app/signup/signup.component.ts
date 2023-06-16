import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  signUp(): void {
    const signupData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password
    };

    this.http.post('http://localhost:8081/signup/post', signupData).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        // Handle successful signup response, e.g., show success message
      },
      (error) => {
        console.error('Signup error:', error);
        // Handle error response, e.g., show error message
      }
    );
  }
}
