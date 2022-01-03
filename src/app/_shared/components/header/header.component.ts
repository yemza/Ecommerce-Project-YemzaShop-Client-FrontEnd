import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/_core/services/basket.service';
import { TokenService } from 'src/app/_core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  basketLenght!: number;

  constructor(private basketService : BasketService , private tokenService : TokenService) { }

  ngOnInit(): void {
    this.getLenghtListBAsket();
  }

  /**
   * get the Leght of the Likst of Basket
   */
  getLenghtListBAsket(){
    this.basketService.getListBasketLenght(this.tokenService.getId()).subscribe(res =>{
     this.basketLenght = res;
    })
  }

}
