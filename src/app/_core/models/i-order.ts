import { IOrderDetail } from "./i-order-detail";

export interface IOrder {
  id: number;
  clientEntityDAO: any;
  orderDetails: IOrderDetail[];
}