import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateProduct, Product } from '../home.model';
import { HomeService } from '../home.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  productForm: any;
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private navigation: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    this.homeService.getProducts().subscribe((products) => {
      this.product = products.find(
        (product) => product._id === productIdFromRoute
      );
      this.loading = false;
      if (this.product) {
        this.productForm = this.formBuilder.group({
          name: this.product.name,
          quantity: this.product.quantity,
          price: this.product.price,
        });
      }
    });
  }

  onSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted', this.productForm.value);
    const productObject: Product = {
      id: this.product?._id,
      ...this.productForm.value,
    };
    this.productService.updateProduct(productObject).subscribe({
      error: (x) => {
        console.log(x);
      },
      next: (x) => {
        this.navigation.navigate(['home/products']);
      },
      complete: () => console.log('Completed Authorization'),
    });
  }
}
