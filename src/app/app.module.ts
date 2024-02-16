import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductsPageComponent,
    HomePageComponent,
    ProductListingComponent,
    ProductsCategoryComponent,
    OrderPageComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
