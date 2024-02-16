import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  toggle = false;
  
  ToggleNav() {
    this.toggle = !this.toggle;
  }
  
  // FETCH DATA FROM SANITY CMS:

  logo: any;

  logo_query = '*[_type == "site_images"]{"img": logo.asset->url}'

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.logo_query).then((data) => {
      this.logo = data[0]["img"];
    });
  }
}
