import { IProduct } from "./i-product";
import { IUser } from "./i-user";
 export interface IBasket {
  id?: number | null ;
  quantity?: number;
  product ?: IProduct;
  user ?: IUser ;
 }