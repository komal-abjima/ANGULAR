import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
   products = [
   {
    id:1,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:15000,
    discountPrice:160,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:2,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:25000,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qEYx1N23L._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:3,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:45000,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714-klcm1rL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:4,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:16000,
    discountPrice:160,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81bh6SxXQ+L._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:5,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:15999,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ifxK5fPUL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:6,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:7000,
    discountPrice:160,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81EgKh4HvUL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:7,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:8000,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:8,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:20000,
    discountPrice:160,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/813sVzTfvaL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:9,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:23000,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818UhQ1kpdL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:10,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:9999,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VbKHdE0rL._AC_UY327_FMwebp_QL65_.jpg"

  },
  {
    id:11,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:12000,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71d7rfSl0wL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id:12,
    name:"Nokia phone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod illo quo ipsam nobis assumenda autem facilis totam magnam. Alias distinctio accusantium iure similique! Velit exercitationem expedita libero aperiam officia id non, maiores est reiciendis enim recusandae ipsum iste unde. Iusto quae recusandae illo, rem autem numquam maxime libero nobis!",
    brand: "nike",
    gender: "Men",
    category:"RUNNING",
    size: [6,7,8],
    color:['blue','red'],
    price:11999,
    is_in_Stock: true,
    items_left:5,
    img_url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81H7FJtH4SL._AC_UY327_FMwebp_QL65_.jpg"
  },


  
  ]

}
