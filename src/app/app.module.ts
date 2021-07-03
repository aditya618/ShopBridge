//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Routing Modules
import { AppRoutingModule } from './app-routing.module';
//Services
import { InventoryApiService } from './core/apis/inventory-api.service';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductCardComponent } from './widgets/product-card/product-card.component';
import { ProductListComponent } from './inventory/product-list/product-list.component';
import { ProductDetailComponent } from './inventory/product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CarouselComponent } from './widgets/carousel/carousel.component';
import { PageNotFoundComponent } from './pageNotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    CarouselComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [InventoryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
