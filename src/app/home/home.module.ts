import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductItemComponent,
    ListProductComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    NavComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
