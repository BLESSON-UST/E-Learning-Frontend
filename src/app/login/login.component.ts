import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    if (this.name === 'admin' && this.password === 'admin') {
      // If the name and password are 'admin', navigate to the admin dashboard
      this.router.navigate(['/admindashboard']);
    } else {
      // Send a GET request to check if the user exists in the backend
      const url = `http://localhost:8081/signup/user/${this.name}`;
      this.http.get(url).subscribe(
        (response: any) => {
          // Handle successful response
          if (response.exists) {
            // User exists, proceed with authentication
            // You can call the login endpoint or perform any other necessary actions
            this.router.navigate(['/userdashboard']);
          } else {
            // User does not exist, show error message or take appropriate action
            alert('Invalid name or password. Please try again.');
          }
        },
        (error) => {
          // Handle error response, e.g., show error message
          console.error('Login error:', error);
          alert('An error occurred. Please try again later.');
        }
      );
    }
  }
}
