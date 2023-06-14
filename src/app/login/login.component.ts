import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    // Add login logic here

    // If login is successful, navigate to userdashboard
    this.router.navigate(['/userdashboard']);
  }

}
