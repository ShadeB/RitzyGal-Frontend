import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import { AddToCartPageComponent } from './pages/add-to-cart-page/add-to-cart-page.component';
import { ProductDetailsResolverService } from './services/resolvers/product-details-resolver.service';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'add-to-cart/:id', component: AddToCartPageComponent,
    resolve: {resolvedProduct: ProductDetailsResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [ProductDetailsResolverService]
})
export class AppRoutingModule { }
