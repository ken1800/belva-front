import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './home.model';
@Injectable({
  providedIn: 'root',
})
export class CategoyService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  createCategory(categoryItem: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}/createCategory`, categoryItem);
  }
  updateCategory(updateItem: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}/updateCategory`, updateItem);
  }
}
