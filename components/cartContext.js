import React, { createContext, useState } from 'react';
import { getPost } from '../services/fakePosts';
export const CartContext = createContext();
export default function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const post = getPost(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            post,
            totalPrice: post.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += post.price;
          }
          return item;
        });
      }
    });
  }
  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
}
