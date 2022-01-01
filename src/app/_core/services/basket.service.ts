import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBasket } from '../models/i-basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http : HttpClient) { }


  addProductToBasket(myBasket : IBasket) : Observable<IBasket>{
    return this.http.post(environment.apiUrl + "addBasket" , myBasket);
  }

  getProductBasketbyUserId(idUser : number): Observable<IBasket>{
    return this.http.get(environment.apiUrl + "getBasketByIdUser?idUser="+idUser );
  }

}
