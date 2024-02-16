import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css'
})
export class ProductsCategoryComponent {
  // getting data from parent:
  @Input() categoryData: any;  
}
