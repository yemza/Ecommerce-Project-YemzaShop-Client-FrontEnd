import { IOrder } from "./i-order";
import { IProduct } from "./i-product";

export interface IOrderDetail {
    id?: number;
    quantity? : string;
    orderEntityDAO?: IOrder;
    productEntityDAO?: IProduct ;
}
