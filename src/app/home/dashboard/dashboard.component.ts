import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Product } from '../home.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: [
    `
      .router-link-active {
        background-color: red;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService) {}

  products: Product[] = [];

  ngOnInit(): void {}

  logout() {
    return this.auth.logout();
  }
}
