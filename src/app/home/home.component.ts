import { Component, OnInit } from '@angular/core';
import { ShopByCategoryService } from './shop-by-category/shop-by-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ShopByCategoryService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
