import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

export interface ILogin {
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private navigation: Router) {}
  loginError = '';
  url = environment.URL;

  loginHandler(user: ILogin) {
    return this.http
      .post<{ token: string }>(`${this.url}/login`, user)
      .subscribe({
        error: (x) => (this.loginError = x),
        next: (x) => {
          localStorage.setItem('authToken', x.token);
          this.navigation.navigate(['home/products']);
        },
        complete: () => console.log('Completed Authorization'),
      });
  }

  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    this.navigation.navigate(['/login']);
  }
}
