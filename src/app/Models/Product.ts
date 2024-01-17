export class Product{
    id:number;
    name: string;
    description: string;
    brand: string;
    color: string[];
    price: number;
    discountPrice?:number;
    is_in_Stock:boolean;
    items_left:number;
    img_url: string;
}