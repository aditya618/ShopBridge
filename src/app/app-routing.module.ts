import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductDetailComponent } from './inventory/product-detail/product-detail.component';
import { ProductListComponent } from './inventory/product-list/product-list.component';
import { PageNotFoundComponent } from './pageNotFound.component';


const routes: Routes = [
  {path: '', component: InventoryComponent, children: [
    {path: '', component: ProductListComponent},
    {path: 'details', component: ProductDetailComponent}
  ]},
  {path:'add', component:AddProductComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
