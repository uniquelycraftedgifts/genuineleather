import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  // FETCH DATA FROM SANITY CMS:

  home_data: any;
  category_data: any;
  story_img: any;

  home_query = '{"HOMEPAGE": *[_type=="home_page"]{story{title,"STORY":content[].children[].text },"FEATURES":features[]{title, description,}} , "CATEGORIES": *[_type=="category"]{category_name, "category_image": category_image.asset->url}, "STORY-IMAGE": *[_type=="site_images"]{"img": story_image.asset->url} }';

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.home_query).then((data) => {
      this.home_data = data["HOMEPAGE"][0];
      this.category_data = data["CATEGORIES"];
      this.story_img = data["STORY-IMAGE"][0]["img"];
    });
  }

  makeUrl(link:string) {
    return "url(" + link + ")";
  }

}
