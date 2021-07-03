import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryApiService } from '../core/apis/inventory-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private apiService: InventoryApiService) { }

  ngOnInit() {
  }

  public navigate() {
    this.apiService.action = 'add';
    this.router.navigate(['/add']);
  }
}
