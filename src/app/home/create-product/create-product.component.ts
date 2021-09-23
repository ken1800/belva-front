import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, ICreateProduct } from '../home.model';
import { HomeService } from '../home.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private navigation: Router
  ) {}

  loading = false;
  error = '';

  categories: Category[] = [];

  productForm = this.formBuilder.group({
    name: '',
    quantity: '',
    price: '',
    category: '',
  });

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.homeService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  onSubmit() {
    const productObject: ICreateProduct = {
      ...this.productForm.value,
    };
    this.productService.createProduct(productObject).subscribe({
      error: (x) => (this.error = x),
      next: (x) => {
        this.navigation.navigate(['home/products']);
      },
      complete: () => console.log('Completed '),
    });
  }
}
