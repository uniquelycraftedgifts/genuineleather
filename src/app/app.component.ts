import { Component, OnInit } from '@angular/core';
import { SanityService } from './sanity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'UniquelyCrafted';


  // QUERY SANITY FOR PRODUCT CATEGORIES:

  categories: any;

  categories_query = '*[_type=="category"]{ category_name }';

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.categories_query).then((data) => {
      this.categories = data;
    });
  }
}
