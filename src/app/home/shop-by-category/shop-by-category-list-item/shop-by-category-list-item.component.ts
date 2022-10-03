import { Component, Input, OnInit } from '@angular/core';
import { ShopByCategoryService } from '../shop-by-category.service';

@Component({
  selector: 'app-shop-by-category-list-item',
  templateUrl: './shop-by-category-list-item.component.html',
  styleUrls: ['./shop-by-category-list-item.component.css']
})
export class ShopByCategoryListItemComponent implements OnInit {

  @Input() item =  this.shopByCategoryService.getShopByCategoryItems()[0];

  constructor(private shopByCategoryService: ShopByCategoryService) { }
  
  ngOnInit(): void {
  }

}
