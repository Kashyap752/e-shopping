export class Product{
    constructor(
        public productId: number,
        public name:string,
        public company:{id: number, name: string},
        public image:string[],
        public seller:{id: number, name: string},
        public price:{mrp: number, discount: number},
        public rating:{score: number, number: number},
        public size:{sizeNo: number, price:{mrp: number, discount: number}, availability: boolean}[]
    ){ }
}