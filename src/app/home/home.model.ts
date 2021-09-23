export interface Product {
  _id: string;
  id?: string;
  name: string;
  price: string;
  quantity: string;
  createAt: string;
  category: Category;
}

export interface Category {
  _id: string;
  name: string;
  createAt: string;
}

export interface ICreateProduct {
  name: string;
  price: string;
  quantity: string;
  category: string;
  _id?: string;
}
