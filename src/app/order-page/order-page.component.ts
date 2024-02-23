import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  
  query_data: any;
  form: any;
  email: any;

  safeURL: any;

  query = '{ "ORDER_FORM":*[_type=="home_page"]{"FORM_URL": order_pdf.asset->url}, "CONTACT":*[_type=="contact_details"]{"EMAIL": email_address[]} }';

  constructor(private sanityService: SanityService, private sanitizer: DomSanitizer) {}

  sanitize(url: string) {
    console.log("sanitizing");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  email_mailto(email:string) {
    return 'mailto:' + email;
  }

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.query).then((data) => {
      this.query_data = data;
      this.form = data["ORDER_FORM"][0]["FORM_URL"];
      this.email = data["CONTACT"][0]["EMAIL"];
    });
  }

}
