import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:{
    id:number,
    name: string,
    description: string,
    brand: string,
    color: string[],
    price: number,
    discountPrice?:number,
    is_in_Stock:boolean,
    items_left:number,
    img_url: string


  };



}
