import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  template: `<div class="text-center p-5 m-5">
    <h1>404</h1>
<h3>Page Not Found</h3>
<a routerLink="/" >Go to Home</a>
</div>`
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
