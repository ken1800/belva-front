import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.url}/getProducts`);
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.url}/getCategories`);
  }
}
