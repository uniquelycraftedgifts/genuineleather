import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {
  show = false;
  show_video = false;

  mini = false;

  Toggle (state:boolean) {
    this.show = state;
  }
  ToggleVideo () {
    this.show_video = !this.show_video;
  }
  CloseVideo() {
    this.show_video = false;
  }

  ToggleMini () {
    this.mini = !this.mini;
  }


  video_url = "https://www.youtube.com/embed/em22l6aKjRE?si=w_DhndHKjR9aM6T_";

  
  // getting data from parent:
  
  @Input() listingData : any;



  makeUrl(link:string) {
    return "url(" + link + ")";
  }

  safeURL: any;
  constructor(private sanitizer: DomSanitizer) {}

  sanitize(videoURL:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
