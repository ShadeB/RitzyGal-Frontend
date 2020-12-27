import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';
import { StarRatingComponent } from './components/shared/star-rating/star-rating.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GraphQLModule } from './graphql/graphql.module';
import { AddToCartComponent } from './components/shared/add-to-cart/add-to-cart.component';
import {QuantityInputComponent} from './components/shared/quantity-input/quantity-input.component';
import {CartSideWidgetComponent} from './components/cart-side-widget/cart-side-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    ProductListingComponent,
    FooterComponent,
    ProductCardComponent,
    StarRatingComponent,
    HomepageComponent,
    AddToCartComponent,
    QuantityInputComponent,
    CartSideWidgetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
