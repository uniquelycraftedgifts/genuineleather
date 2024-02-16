import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  
  content: any;

  query = '*[_type=="product_listing"]{product_name, product_category->{category_name}}';

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.query).then((data) => {
      this.content = data;
    });
  }

}
