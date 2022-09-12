import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from 'src/app/_core/services/basket.service';
import { TokenService } from 'src/app/_core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  basketLenght!: number;
  private subs = new Subscription();

  constructor(
    private basketService: BasketService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.basketService.basketCount.subscribe((res) => {
      this.basketLenght = res;
    });
    this.getLenghtListBAsket();
  }

  /**
   * get the Leght of the Likst of Basket
   */
  getLenghtListBAsket() {
    this.subs.add(
      this.basketService
        .getListBasketLenght(this.tokenService.getId())
        .subscribe((res) => {
          this.basketLenght = res;
          this.basketService.setbasketCount(this.basketLenght);
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
