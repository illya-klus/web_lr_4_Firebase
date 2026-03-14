import { products } from "../../../data/products";


export type Product = {
    id: number;
    brand: string;
    title : string;
    description : string;
    price : number;
    discount : number | null;
    stock : number;
    currency : string;
    image : string;
}

export const downloadProducts = () : Product[] => {
    return products;
}

export const downloadProductsWithDiscount = () => {
  return products.filter(item => item.discount != null);
};






