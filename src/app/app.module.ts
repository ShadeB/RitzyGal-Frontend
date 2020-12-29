import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductListingComponent } from './components/shared/product-listing/product-listing.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';
import { StarRatingComponent } from './components/shared/star-rating/star-rating.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GraphQLModule } from './graphql/graphql.module';
import { AddToCartComponent } from './components/shared/add-to-cart/add-to-cart.component';
import {QuantityInputComponent} from './components/shared/quantity-input/quantity-input.component';
import {CartSideWidgetComponent} from './components/cart-side-widget/cart-side-widget.component';
import { AddToCartPageComponent } from './pages/add-to-cart-page/add-to-cart-page.component';

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
    AddToCartPageComponent,

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
