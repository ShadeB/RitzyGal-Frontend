export interface CartItem {
  id: string,
  name: string;
  image: string;
  size: number;
  color: string;
  rating: number;
  quantity: number;
}

export interface Cart {
  Cart: CartItem
}
