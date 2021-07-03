import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {
  public url: string = "https://60dea5aaabbdd9001722cf57.mockapi.io/api/v1/products";
  public action: string = 'add';
  private selectedItem: Product;

  constructor(private http: HttpClient) { }

  public addProduct(product: Product) {
    return this.http.post(this.url,product);
  }

  public getProducts() {
    return this.http.get(this.url);
  }

  public editProduct(id: string, product: Product) {
    return this.http.put(`${this.url}/${id}`, product);
  }

  public deleteProduct(id:string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  public setSelectedProduct(product: Product) {
    this.selectedItem = product;
  }

  public getSelectedItem() {
    return this.selectedItem;
  }
}
