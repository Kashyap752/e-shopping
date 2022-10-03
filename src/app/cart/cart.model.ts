import { Product } from "../shared/product.model";

 export class Cart{
    constructor(
        public product: Product|undefined,
        public quantity: number,
        public size:{sizeNo: number, price:{mrp: number, discount: number}, availability: boolean}
    ){ }
 }