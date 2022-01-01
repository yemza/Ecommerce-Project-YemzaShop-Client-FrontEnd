import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/_core/models/i-basket';
import { BasketService } from 'src/app/_core/services/basket.service';
import { NotificationService } from 'src/app/_core/services/notification.service';
import { TokenService } from 'src/app/_core/services/token.service';

@Component({
  selector: 'app-container-checkout-page',
  templateUrl: './container-checkout-page.component.html',
  styleUrls: ['./container-checkout-page.component.css']
})
export class ContainerCheckoutPageComponent implements OnInit {

   listOfProductBAsket : IBasket[]=[];

  constructor(private basketService : BasketService,
              private tokenService : TokenService,
              private notification: NotificationService) { }

  ngOnInit(): void {

    this.getProductBasketbyUserId();
  }

  getProductBasketbyUserId(){
   this.basketService.getProductBasketbyUserId(this.tokenService.getId()).subscribe(res=>{
     this.listOfProductBAsket = res as IBasket[];
   }, (error) => {
    this.notification.error('Error',error.originalError.statusText)
   })
  }
}
