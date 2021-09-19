import { IProduct } from "./i-product";

export interface IOrderDetail {
    id: number;
    quantity : string;
    orderEntityDAO : any;
    productEntityDAO : IProduct;

}
