import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryApiService } from 'src/app/core/apis/inventory-api.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public spinner: boolean = false;
  constructor(private apiService: InventoryApiService, private router: Router) { }

  ngOnInit() {
    this.spinner = true;
    this.apiService.getProducts()
      .subscribe((res: Product[]) => {
        console.log(res);
        this.products = res;
        this.spinner = false;
      },
      err => console.log(err));
  }

  public onCardClick(product: Product) {
    this.apiService.setSelectedProduct(product);
    this.router.navigate(['/details']);
  }

}
