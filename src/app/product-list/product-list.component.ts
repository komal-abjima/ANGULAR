import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    // name = "John smith";
    addToCart:number = 0;
    message:string = '';
    product = {
      name: "Redmi",
      price: 7000,
      color: "Black",
      discount: 10,
      inStock: 10,
      pImage: '/assets/image/mobile.jpg'
  
    }
  
    getDiscountedPrice(){
      return this.product.price - (this.product.price * this.product.discount / 100);  
    }
  
    onNameChange(event: any){
      // this.name = "Mark"
      // console.log(event);
      // this.name = event.target.value;
    }
  
    decrementCartValue(){
  
      if(this.addToCart === 0){
         this.message = 'Cart is Empty!'
      }
      else{
        this.addToCart--;
      }
  
    }
  
    incrementCartValue(){
      if(this.addToCart < this.product.inStock){
        this.addToCart++;
      }
      
  
  
    }

}
