import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.css']
})
export class SubTotalComponent implements OnInit {

  sub_total: number = 0;
  total_discount: number = 0;
  delivery_charges: number = 0;
  security_fees: number = 0;
  no_Of_Items: number = 0;

  constructor(private cartService : CartService) { 
      const sub = this.cartService.cartSubtotal();
      this.sub_total = sub.total;
      this.total_discount = sub.discount;
      this.delivery_charges = 0;
      this.security_fees = 40;
      this.no_Of_Items = this.cartService.getCartItems().length;
  }

  ngOnInit(): void {
    this.cartService.quantityChanged.subscribe((item)=>{
      const sub = this.cartService.cartSubtotal();
      this.sub_total = sub.total;
      this.total_discount = sub.discount;
      this.no_Of_Items = this.cartService.getCartItems().length;
    })
  }

}
