import { Component, OnInit } from '@angular/core';
import { ShopByCategoryService } from '../shop-by-category.service';

@Component({
  selector: 'app-shop-by-category-list',
  templateUrl: './shop-by-category-list.component.html',
  styleUrls: ['./shop-by-category-list.component.css']
})
export class ShopByCategoryListComponent implements OnInit {

  items:any;
  constructor(private shopByCategoryService : ShopByCategoryService) { }

  ngOnInit(): void {
    this.items = this.shopByCategoryService.getShopByCategoryItems();
  }

}
