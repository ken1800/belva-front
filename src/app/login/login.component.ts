import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILogin } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  authError = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private navigation: Router
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const user: ILogin = {
      ...this.loginForm.value,
    };

    try {
      this.loading = true;
      return this.auth.loginHandler(user).subscribe({
        error: (x) => {
          this.loading = false;
          this.authError = x.error?.authError;
        },
        next: (x) => {
          this.loading = false;
          localStorage.setItem('authToken', x.token);
          this.navigation.navigate(['home/products']);
        },
        complete: () => console.log('Completed Authorization'),
      });
    } catch (error) {
      this.loading = false;
      return;
    }
  }

  ngOnInit(): void {}
}
