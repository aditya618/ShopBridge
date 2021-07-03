import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { InventoryApiService } from '../core/apis/inventory-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public imgUrl: string = "";
  public imgErr: string = "";
  public action: string = "";
  public success: boolean = false;
  public error: boolean = false;
  public spinner: boolean = false;
  public Product: Product = {
    title: ' ',
    image: ' ',
    description: ' ',
    price: 0
  };

  constructor(private apiService: InventoryApiService, private router: Router) { }

  ngOnInit() {
    this.action = this.apiService.action;
    if(this.action === 'edit') {
      this.Product = this.apiService.getSelectedItem();
      this.imgUrl = this.Product.image;
    }
  }

  public onSubmit(form) {
    this.spinner = true;
    let product: Product;
    console.log(form);
    const date = new Date();

    if(this.action === 'add'){
      product = {
        title: form.title,
        description: form.description,
        tags: form.tags.split(','),
        price: form.price,
        id: Math.floor(Math.random() * 1000000).toString(),
        createdAt: date.getTime(),
        image: this.imgUrl
      }
      this.apiService.addProduct(product).subscribe(() => {
        console.log('Posted!');
        this.imgErr = "";
        // this.router.navigate(['/']);
        this.success = true;
        this.error = false;
        this.spinner = false;
      },
      err => {
        console.error(err);
        if(err.status === 413){
          this.imgErr = "Image size too large."
        }
        this.success = false;
        this.error = true;
        this.spinner = false;
      });
    }

    if(this.action === 'edit') {
      let tags = (typeof(form.tags) === 'string') ? form.tags : form.tags.join(",");
      product = {
        title: form.title,
        description: form.description,
        tags: tags.split(','),
        price: form.price,
        id: Math.floor(Math.random() * 1000000).toString(),
        createdAt: date.getTime(),
        image: this.imgUrl
      }
      this.apiService.editProduct(this.Product.id, product).subscribe(() => {
        console.log('Edited!');
        this.imgErr = "";
        // this.router.navigate(['/']);
        this.success = true;
        this.error = false;
        this.spinner = false;
      },
      err => {
        console.error(err);
        if(err.status === 413){
          this.imgErr = "Image size too large."
        }
        this.success = false;
        this.error = true;
        this.spinner = false;
      });
    }

  }

  public onFileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      this.imgErr = '';
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        this.imgUrl = reader.result as string;
        // console.log(this.imgUrl);
      };
    } else {
      this.imgUrl = '';
    }
  }

}
