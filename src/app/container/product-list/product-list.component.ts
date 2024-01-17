import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct: Product;
   products = [
   {
    id:1,
    name:"REDMI NOTE 13 5G",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "REDMI",
    color:['white','blue'],
    price:15000,
    discountPrice:160,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:2,
    name:"NKOIA G 42 5G",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "NOKIA",
    color:['red'],
    price:25000,
    is_in_Stock: false,
    items_left:0,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qEYx1N23L._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:3,
    name:"TECNO POP 8",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "TECHNO",
    color:['blue','black'],
    price:45000,
    is_in_Stock: true,
    items_left:15,
    img_url:"https://m.media-amazon.com/images/I/61G6ef-AH-L._AC._SR360,460.jpg"

  },
  {
    id:4,
    name:"REDMI A2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "REDMI",
    color:['green'],
    price:16000,
    discountPrice:160,
    is_in_Stock: false,
    items_left:0,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bh6SxXQ+L._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:5,
    name:"A 70",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "A 70",
    color:['blue'],
    price:15999,
    is_in_Stock: true,
    items_left:2,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ifxK5fPUL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:6,
    name:"SAMSUNG GALAXY A05",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "SAMSUNG",
    color:['white','blue'],
    price:19999,
    discountPrice:160,
    is_in_Stock: true,
    items_left:3,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EgKh4HvUL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:7,
    name:"APPLE 14 PRO",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "APPLE",
    color:['black'],
    price:80000,
    is_in_Stock: true,
    items_left:1,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:8,
    name:"SAMSUNG MO4",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "SAMSUNG",
    color:['green', 'black'],
    price:20000,
    discountPrice:160,
    is_in_Stock: false,
    items_left:0,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813sVzTfvaL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:9,
    name:"REALME NARZO 5G",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "REALME",
    color:['black'],
    price:23000,
    is_in_Stock: false,
    items_left:0,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818UhQ1kpdL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:10,
    name:"IQOO Z6 LITE",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "IQOO",
    color:['blue', 'red'],
    price:9999,
    is_in_Stock: true,
    items_left:3,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VbKHdE0rL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:11,
    name:"APPLE 13",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "APPLE",
    color:['white'],
    price:65000,
    is_in_Stock: true,
    items_left:2,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id:12,
    name:"REDMI 13C 5G",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "REDMI",
    color:['golden'],
    price:11999,
    is_in_Stock: true,
    items_left:7,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81H7FJtH4SL._AC_UY327_FMwebp_QL65_.jpg"
  },


  
  ];

  // @Input() custom property binding 
  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_Stock === true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_Stock === false).length;
  
  @Input()
  searchText: string = '';

  // Output()
  selectedFilteredRadioButton: string = 'all';
  
  onFilterChanged(value: string){
    //console.log('this event raised');
    console.log(value);
    this.selectedFilteredRadioButton = value;
  }


}
