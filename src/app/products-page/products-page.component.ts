import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  toggle = false;
  
  ToggleNav() {
    this.toggle = !this.toggle;
  }

  // fetch content from sanity using the sanity service:
  categories: any;

  categories_query = '*[_type=="category"]{ category_name, category_slug, "PRODUCTS": *[_type=="product_listing" && references(^._id)]{product_category->{category_name}, product_name, product_code, product_description{description, optional}, product_size, product_price, "COLOURS": one_tone[]->{colour_name, colour_code, colour_hex}, "TWO_TONE": two_tone[]->{two_tone_name, two_tone_code, "ONE": colour_one->{colour_hex}, "TWO": colour_two->{colour_hex}}, material_patterns{material_component, "MATERIALS": material[]->{material_name, material_code, "IMG": material_image.asset->url}}, "DEVIATION": colour_deviation{deviation, "DEVIATIONcolours": deviation_one_tone[]->{colour_name, colour_code, colour_hex}, "DEVIATIONpatterns": deviation_pattern[]->{pattern_name, pattern_code, "DEVIATIONpatternImg": pattern_image.asset->url}}, "MAIN_IMG": product_main_image.asset->url, "IMAGES": product_images[].asset->url, "PRICES":product_prices[]{price_description, price_amount}, product_video} }';

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.categories_query).then((data) => {
      this.categories = data;
      
      console.log(data);
    });
  }
}
