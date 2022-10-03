
export class ShopByCategory{

    constructor(
        public category:{id: number, name: string},
        public usedBy: string,
        public discount: {min: number, max: number},
        public imgUrl: string
    ){ }
}