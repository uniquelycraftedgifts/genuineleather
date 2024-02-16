import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  // FETCH DATA FROM SANITY CMS:

  hero_img: any;

  hero_query = '*[_type == "site_images"]{"img": hero_image.asset->url}'

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.hero_query).then((data) => {
      this.hero_img = data[0]["img"];
    });
  }

  makeUrl(link:string) {
    return "url(" + link + ")";
  }
}
