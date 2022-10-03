import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class ProductService{

    private products : Product[] = [
        new Product(
            1001, 
            'U S Polo Assn Men Black SPECTER 5.0 Sliders',
            {id:101, name:'U.S. Polo Assn.'},
            [
                'https://assets.ajio.com/medias/sys_master/root/20220719/2gmF/62d6e846f997dd03e2e059c3/-473Wx593H-469152963-black-MODEL.jpg',
                'https://cdn13.nnnow.com/web-images/large/styles/CGF2K13N577/1654599893794/1.jpg',
                'https://cdn10.nnnow.com/web-images/large/styles/CGF2K13N577/1654599893788/5.jpg'
            ],
            {id:1,name:'Supercom Net'},
            {mrp:1599, discount:40},{score:4.3, number:143},
            [{sizeNo:6, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:7, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:8, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:9, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:10, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:11, price:{mrp:1599, discount:30},availability:true},
            ]
        ),
        new Product(
            1002, 
            'Mast & Harbour',
            {id:102, name:'Men Olive Green Solid Sliders'},
            [
                'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10763150/2019/11/12/0a0da31d-d515-44e0-b568-a463bbbca5131573557394252-WROGN-Men-Olive-Green-Solid-Sliders-5071573557392958-1.jpg',
                'https://rukminim1.flixcart.com/image/832/832/k5fn3ww0/slipper-flip-flop/2/e/c/10763150-45-wrogn-olive-original-imafz4es3pwwczqg.jpeg'
            ],
            {id:1,name:'Supercom Net'},
            {mrp:1699, discount:75},
            {score:4.3, number:143},
            [{sizeNo:6, price:{mrp:1699, discount:75},availability:true},
             {sizeNo:7, price:{mrp:1699, discount:40},availability:true},
             {sizeNo:8, price:{mrp:1699, discount:50},availability:true},
             {sizeNo:9, price:{mrp:1699, discount:45},availability:true},
             {sizeNo:10, price:{mrp:1699, discount:40},availability:true},
             {sizeNo:11, price:{mrp:1699, discount:30},availability:true},
            ]
        ),
        new Product(
            1003, 
            'U S Polo Assn Men Black SPECTER 5.0 Sliders',
            {id:101, name:'U.S. Polo Assn.'},
            [
                'https://assets.ajio.com/medias/sys_master/root/20220719/2gmF/62d6e846f997dd03e2e059c3/-473Wx593H-469152963-black-MODEL.jpg',
                'https://cdn13.nnnow.com/web-images/large/styles/CGF2K13N577/1654599893794/1.jpg',
                'https://cdn10.nnnow.com/web-images/large/styles/CGF2K13N577/1654599893788/5.jpg'
            ],
            {id:1,name:'Supercom Net'},
            {mrp:1599, discount:40},{score:4.3, number:143},
            [{sizeNo:6, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:7, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:8, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:9, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:10, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:11, price:{mrp:1599, discount:30},availability:true},
            ]
        ),
        new Product(
            1004, 
            'Mast & Harbour',
            {id:102, name:'Men Olive Green Solid Sliders'},
            [
                'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10763150/2019/11/12/0a0da31d-d515-44e0-b568-a463bbbca5131573557394252-WROGN-Men-Olive-Green-Solid-Sliders-5071573557392958-1.jpg',
                'https://rukminim1.flixcart.com/image/832/832/k5fn3ww0/slipper-flip-flop/2/e/c/10763150-45-wrogn-olive-original-imafz4es3pwwczqg.jpeg'
            ],
            {id:1,name:'Supercom Net'},
            {mrp:1599, discount:40},{score:4.3, number:143},
            [{sizeNo:6, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:7, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:8, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:9, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:10, price:{mrp:1599, discount:40},availability:true},
             {sizeNo:11, price:{mrp:1599, discount:30},availability:true},
            ]
        ),
    ];
    constructor(){ }

    getProducts():Product[]{
        return this.products.slice();
    }

    getProduct(productId: number): Product{
        return this.products.filter((product)=>{
            product.productId === productId
        })[0];
    }
}