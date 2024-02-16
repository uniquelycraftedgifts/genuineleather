import { Component } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
    
  // GETTING DATA FROM SANITY CMS:

    terms_data: any;

    terms_query = '*[_type=="home_page"]{"TERMS": terms_conditions[]{style, "text": children[].text}}'
  
    constructor(private sanityService: SanityService) {}
  
    ngOnInit(): void {
      this.sanityService.getClient().fetch(this.terms_query).then((data) => {
        this.terms_data = data[0]["TERMS"];
      });
    }
}
