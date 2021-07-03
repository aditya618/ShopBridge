import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryApiService } from 'src/app/core/apis/inventory-api.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public error: boolean = false;
  public success: boolean = false;
  public spinner:boolean = false;

  constructor(private apiService: InventoryApiService, private router: Router) { }

  ngOnInit() {
    if(this.apiService.getSelectedItem()) {
      this.product = this.apiService.getSelectedItem();
    } else {
      this.router.navigate(['/']);
    }
  }

  public onEdit() {
    this.apiService.setSelectedProduct(this.product);
    this.apiService.action = 'edit';
    this.router.navigate(['/add']);
  }

  public onDelete() {
    this.spinner = true;
    this.apiService.deleteProduct(this.product.id)
      .subscribe(() => {
        console.log('Deleted!');
        this.error = false;
        this.success = true;
        setTimeout(() => {
          this.spinner = false;
          this.router.navigate(['/']);
        }, 3000);
      },
      err => {
        this.error = true;
        this.success = true;
        this.spinner = false;
      })
  }

}
