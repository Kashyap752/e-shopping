import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";
import { Cart } from "./cart.model";

@Injectable()
export class CartService{

    private cartItems: Cart[] = [
        new Cart(this.productService.getProducts()[0], 3, {sizeNo:6, price:{mrp:1599, discount:40},availability:true}),
        new Cart(this.productService.getProducts()[1], 1,{sizeNo:6, price:{mrp:1699, discount:75},availability:true}
            )
    ];

    quantityChanged = new EventEmitter<Cart[]>();

    constructor(private productService: ProductService){
        console.log(productService);
        
    }

    getCartItems(): Cart[]{
        return this.cartItems.slice();
    }

    addToCart(product: Product, quantity: number, size:{sizeNo: number, price:{mrp: number, discount: number}, availability: boolean}){
        const item = new Cart(product, quantity, size);
        this.cartItems.push(item);
    }

    removeFromCart(index: number){
        this.cartItems.splice(index, 1);
    }

    increaseQuantity(index: number){
        console.log(index);
        this.cartItems[index].quantity++;
        this.quantityChanged.emit(this.cartItems);
    }

    decreaseQuantity(index: number){
        this.cartItems[index].quantity > 1 ? this.cartItems[index].quantity-- : this.removeFromCart(index);
        this.quantityChanged.emit(this.cartItems);
    }

    cartSubtotal(): {total: number, discount: number}{
        let total = 0;
        let discount = 0;
        this.cartItems.map((item)=>{
            const dis = ((item.size.price.mrp * item.size.price.discount )/100);
            total = total + item.size.price.mrp*item.quantity ;
            discount = discount + Math.floor(dis*item.quantity);
        })
        return {total, discount};
    }
}