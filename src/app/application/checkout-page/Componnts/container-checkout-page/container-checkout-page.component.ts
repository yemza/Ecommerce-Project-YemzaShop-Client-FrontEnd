import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/_core/models/i-basket';
import { BasketService } from 'src/app/_core/services/basket.service';

@Component({
  selector: 'app-container-checkout-page',
  templateUrl: './container-checkout-page.component.html',
  styleUrls: ['./container-checkout-page.component.css']
})
export class ContainerCheckoutPageComponent implements OnInit {

   listOfProductBAsket : IBasket[]=[];

  constructor(private basketService : BasketService) { }

  ngOnInit(): void {

    this.getProductBasket();
  }

  getProductBasket(){
   this.basketService.getProductBasket().subscribe(res=>{
     console.log(res)
     this.listOfProductBAsket = res as IBasket[];
     console.log(this.listOfProductBAsket)

   })
  }
}
