import { IClient } from "./i-client";
import { IProduct } from "./i-product";

 export interface IBasket {
  id?: number | null ;
  quantity?: number;
  product ?: IProduct;
  client ?: IClient | null;
 }