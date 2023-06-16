import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8081'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const loginData = { username, password };
    return this.http.post(url, loginData);
  }

  checkUser(name: string): Observable<any> {
    const url = `${this.baseUrl}/signup/user/${name}`;
    return this.http.get(url);
  }
}
