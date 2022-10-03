import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Cart = this.cartService.getCartItems()[0];
  @Input() index = 0;
  imageUrl: string = "";
  price : number = 0;
  quantity : number = 1;
  show : boolean = false;
  sizes = this.item.product?.size;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.sizes = this.item.product?.size;
    this.imageUrl = this.item.product? this.item.product.image[0] : "";
    this.quantity = this.item.quantity;
    this.price = this.item.size ? Math.ceil(this.item.size.price.mrp - (this.item.size.price.mrp * this.item.size.price.discount)/100)*this.item.quantity : 0;
  }

  incrementQuantity(index: number){
    this.cartService.increaseQuantity(index);
    this.price = this.item.size ? Math.ceil(this.item.size.price.mrp - (this.item.size.price.mrp * this.item.size.price.discount)/100)*this.item.quantity : 0;
  }

  decrementQuantity(index: number){
    this.cartService.decreaseQuantity(index);
    this.price = this.item.size ? Math.ceil(this.item.size.price.mrp - (this.item.size.price.mrp * this.item.size.price.discount)/100)*this.item.quantity : 0;
  }

  showSizeItem(){
    this.show =! this.show;
  }

  selectSize(item : Cart, size: any){
    this.item.size = size;
    this.price = this.item.size ? Math.ceil(this.item.size.price.mrp - (this.item.size.price.mrp * this.item.size.price.discount)/100)*this.item.quantity : 0;
    this.showSizeItem();
  }
}
