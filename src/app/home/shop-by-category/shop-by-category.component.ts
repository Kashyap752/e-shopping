import { Component, OnInit } from '@angular/core';
import { ShopByCategoryService } from './shop-by-category.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {

  constructor(private shopByCategoryService: ShopByCategoryService ) { }

  ngOnInit(): void {
  }

}
