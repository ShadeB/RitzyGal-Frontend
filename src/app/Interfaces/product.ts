export interface Color {
  Hex: string, name: string
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: [string];
  price: number;
  sizes: string;
  image: string;
  brand: [string];
  instock: boolean;
  rating: number
  colors: [Color];
}
