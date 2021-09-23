import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ICreateProduct, Product } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  createProduct(productItem: ICreateProduct): Observable<ICreateProduct> {
    return this.http.post<ICreateProduct>(
      `${this.url}/createProduct`,
      productItem
    );
  }
  updateProduct(updateItem: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/updateProduct`, updateItem);
  }
}
