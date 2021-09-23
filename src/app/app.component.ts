import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test-app';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    const token = this.auth.getAuthorizationToken();
    if (true) {
      this.router.navigate(['home/products']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
