import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from './home.model';
@Injectable({
  providedIn: 'root',
})
export class CategoyService {
  url = environment.URL;

  constructor(private http: HttpClient) {}

  createCategory(categoryItem: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}/createCategory`, categoryItem);
  }
  updateCategory(updateItem: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}/updateCategory`, updateItem);
  }
}
