export interface CartItem {
  id: string,
  name: string;
  image: string;
  size: number;
  price: number;
  color: string;
  quantity: number;
}

export interface Cart {
  cart: CartItem
}
