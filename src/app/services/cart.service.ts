import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    //item varsa quantity'i 1 arttırmak gerekli
    let item = CartItems.find(c=>c.product.productId === product.productId);
    if(item){
      item.quantity+=1;
    }
    else{
      //push, array'e eleman eklemek için kullanılır.
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(product:Product){
let item:CartItem = CartItems.find(c=>c.product.productId === product.productId);
CartItems.splice(CartItems.indexOf(item),1);
  }
  list():CartItem[]{
    return CartItems;
  }
}
