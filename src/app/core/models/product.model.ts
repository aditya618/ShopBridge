export interface Product {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  price: number;
  createdAt?: number;
  id?: string;
}
