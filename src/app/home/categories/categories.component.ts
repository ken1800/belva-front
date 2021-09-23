import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoyService } from '../categoy.service';
import { Category } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  fetching = false;

  constructor(
    private categoryService: CategoyService,
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private navigation: Router
  ) {}

  categoryForm = this.formBuilder.group({
    name: '',
  });

  ngOnInit(): void {
    this.fetching = true;
    this.homeService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.fetching = false;
    });
  }

  onSubmit() {
    const categoryItem: Category = {
      ...this.categoryForm.value,
    };

    this.categoryService.createCategory(categoryItem).subscribe({
      error: (x) => console.log,
      next: (x) => {
        this.categoryForm = this.formBuilder.group({
          name: '',
        });

        this.categories = [
          ...this.categories,
          {
            ...x,
          },
        ];
      },
      complete: () => console.log('Completed'),
    });
  }
}
