import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IBasket } from 'src/app/_core/models/i-basket';
import { BasketService } from 'src/app/_core/services/basket.service';

@Component({
  selector: 'app-cart-table-products',
  templateUrl: './cart-table-products.component.html',
  styleUrls: ['./cart-table-products.component.css'],
})
export class CartTableProductsComponent implements OnInit {
  @Input() listOfProductBAsket: IBasket[] = [];

  @Output() deleteProductFromBasketEvent = new EventEmitter();
  total: any = 0;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listOfProductBAsket']) {
      this.CountTotal();
    }
  }

  CountTotal() {
    this.total = null;
    this.listOfProductBAsket.forEach((element) => {
      if (element?.quantity && element?.product?.price) {
        this.total += element?.product?.price * element?.quantity;
      }
    });
  }

  /**
   * Deleting Product From the BAsket List
   * @param idBasket
   */
  deletePoductFromBasket(index: any) {
    //to send Event with id
    this.deleteProductFromBasketEvent.emit(this.listOfProductBAsket[index]?.id);
    let basketCount = Number(this.basketService.getbasketCount()) - 1;
    this.basketService.changebasketCount(basketCount);
    this.basketService.setbasketCount(basketCount);
  }
}
