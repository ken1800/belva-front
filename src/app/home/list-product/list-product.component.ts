import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category, Product } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  constructor(private homeService: HomeService, private fb: FormBuilder) {}

  products: Product[] = [];
  filterdProducts: Product[] = [];
  categories: Category[] = [];
  selectedCategory = '';
  fetching = false;

  categoryForm = this.fb.group({
    category: '',
  });

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getCategories();
    this.getProducts();
  }

  getProducts() {
    this.fetching = true;
    this.homeService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.filterdProducts = data;
        this.fetching = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filter() {
    this.filterdProducts = this.selectedCategory
      ? this.products.filter((product) => {
          return product.category._id === this.selectedCategory;
        })
      : this.products;
  }

  getCategories() {
    this.homeService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
