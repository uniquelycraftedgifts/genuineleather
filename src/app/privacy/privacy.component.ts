import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent implements OnInit {

  // GETTING DATA FROM SANITY CMS:

  privacy_data: any;

  privacy_query = '*[_type=="home_page"]{"POLICY": privacy_policy[]{style, "text": children[].text}}'

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.privacy_query).then((data) => {
      this.privacy_data = data[0]["POLICY"];
    });
  }
}
