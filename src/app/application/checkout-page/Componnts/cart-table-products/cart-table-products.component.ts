import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IBasket } from 'src/app/_core/models/i-basket';

@Component({
  selector: 'app-cart-table-products',
  templateUrl: './cart-table-products.component.html',
  styleUrls: ['./cart-table-products.component.css']
})
export class CartTableProductsComponent implements OnInit {
  
  @Input() listOfProductBAsket : IBasket[]=[];

  @Output() deleteProductFromBasketEvent = new EventEmitter();
  total : any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listOfProductBAsket']) {
      console.log(this.listOfProductBAsket);
      this.CountTotal();
    }
  }


  CountTotal(){
    this.total = null;
      this.listOfProductBAsket.forEach(element => {
        if(element?.quantity && element?.product?.price){
          this.total += (element?.product?.price * element?.quantity);
        }
   });
  }


  /**
   * Deleting Product From the BAsket List
   * @param idBasket 
   */
  deletePoductFromBasket(index : any){
    //to send Event with id
    this.deleteProductFromBasketEvent.emit(this.listOfProductBAsket[index]?.id);
  }




}
