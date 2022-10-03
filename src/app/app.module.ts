import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './cart/list/list.component';
import { ItemComponent } from './cart/list/item/item.component';
import { ProductService } from './shared/product.service';
import { CartService } from './cart/cart.service';
import { DropdownDirective } from './dropdown.directive';
import { SubTotalComponent } from './cart/sub-total/sub-total.component';
import { ShopByCategoryComponent } from './home/shop-by-category/shop-by-category.component';
import { ShopByCategoryListComponent } from './home/shop-by-category/shop-by-category-list/shop-by-category-list.component';
import { ShopByCategoryListItemComponent } from './home/shop-by-category/shop-by-category-list-item/shop-by-category-list-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SubHeaderComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    ListComponent,
    ItemComponent,
    DropdownDirective,
    SubTotalComponent,
    ShopByCategoryComponent,
    ShopByCategoryListComponent,
    ShopByCategoryListItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
