import { Injectable } from '@angular/core';
import { IOrderDetail } from '../models/i-order-detail';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

    orderDetailList : IOrderDetail []= []

  constructor() {}


  getAllOrdersDetail(){
      return this.orderDetailList
  }

  addNewOrderDetail(orderDetailList : IOrderDetail){
      this.orderDetailList.push(orderDetailList)
  }

  deleteOrOrderDetail(index : number){
      this.orderDetailList.slice(index , 1);
  }

  updateOrOrderDetail(index : number ,orderDetailList : IOrderDetail){
      this.orderDetailList[index] = orderDetailList;
  }


}
