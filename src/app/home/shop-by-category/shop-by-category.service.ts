import { ShopByCategory } from "./shop-by-category.model";


export class ShopByCategoryService{

    constructor(){}

    private shopByCategoryItems =[
        new ShopByCategory(
            {id: 5001, name: 'Ethinic Wear'},
            'female',
            {min: 50, max: 80},
            'https://g3fashion.com/blog/wp-content/uploads/2021/08/BeFunky-collage-6.jpg'
        ),
        new ShopByCategory(
            {id: 5002, name: 'Casual Wear'},
            'male',
            {min: 40, max: 80},
            'https://i.pinimg.com/236x/57/de/b4/57deb47a4a6382ee5c3a4aff8cf445e0.jpg'
        ),
        new ShopByCategory(
            {id: 5003, name: 'Activewear'},
            'female',
            {min: 30, max: 70},
            'https://res.cloudinary.com/stitch-fix/image/upload/q_auto:best/v1578604239/page-author/athgallery-2-2d2%402x.jpg'
        ),
        new ShopByCategory(
            {id: 5004, name: 'Activewear'},
            'male',
            {min: 30, max: 70},
            'https://images.lifestyleasia.com/wp-content/uploads/sites/3/2020/05/20220159/Screen-Shot-2563-05-20-at-6.59.10-PM.png'
        ),
        new ShopByCategory(
            {id: 5005, name: 'Western Wear'},
            'female',
            {min: 40, max: 80},
            'https://rukminim1.flixcart.com/image/332/398/kkh6zrk0/dress/z/h/r/xxl-western-dress-for-women-girls-with-fabric-belt-modli-20-original-imafztegfn5nhzcg.jpeg'
        ),
        new ShopByCategory(
            {id: 5006, name: 'Sportswear'},
            'both',
            {min: 30, max: 80},
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2326606b-7fdf-4003-89e4-160dad3fe9d5/sportswear-polo-DC7bQN.png'
        ),
        new ShopByCategory(
            {id: 5007, name: 'Loungewear'},
            'both',
            {min: 30, max: 60},
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfY4gy8U0dSyaMEMgPhrqYti6Yf9P6OxShwQ&usqp=CAU.png'
        ),
        new ShopByCategory(
            {id: 5008, name: 'Bags & Backpacks'},
            'both',
            {min: 30, max: 80},
            'https://i.pinimg.com/236x/57/de/b4/57deb47a4a6382ee5c3a4aff8cf445e0.jpg'
        ),
        new ShopByCategory(
            {id: 5009, name: 'Bags, Belt & Wallets'},
            'male',
            {min: 40, max: 70},
            'https://5.imimg.com/data5/SELLER/Default/2022/9/HT/RY/WA/5240844/1662723178291-500x500.jpg'
        ),
        new ShopByCategory(
            {id: 5010, name: 'Watches'},
            'both',
            {min: 0, max: 80},
            'https://media.gq.com/photos/5e8c9a7cc21b8b00087a00f1/3:2/w_1686,h_1124,c_limit/watches-fix.jpg'
        ),
        new ShopByCategory(
            {id: 5011, name: 'Grooming'},
            'male',
            {min: 0, max: 60},
            'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/wg_main.jpg'
        ),
        new ShopByCategory(
            {id: 5012, name: 'Beauty & Personal Care'},
            'female',
            {min: 0, max: 60},
            'https://cdn.openpr.com/T/a/Ta20449804_g.jpg'
        ),
        new ShopByCategory(
            {id: 5013, name: 'Kids Wear'},
            'both',
            {min: 50, max: 70},
            'https://cdn.shopify.com/s/files/1/0584/2770/3448/collections/Catlog-Girls-Kids-wear.jpg?v=1637756504.png'
        ),
        new ShopByCategory(
            {id: 5014, name: 'Footwear'},
            'male',
            {min: 50, max: 70},
            'https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOICEBULL-LEATSHIK795733D99D2904/1564564476387_0..jpg'
        ),
        new ShopByCategory(
            {id: 5015, name: 'Footwear'},
            'female',
            {min: 40, max: 80},
            'https://sc04.alicdn.com/kf/Ha57816167aeb4269a517777565cdf944w.jpg'
        ),
    ]

    getShopByCategoryItems(){
        return this.shopByCategoryItems.slice();
    }

}