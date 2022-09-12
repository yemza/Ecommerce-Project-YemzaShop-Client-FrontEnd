import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBasket } from '../models/i-basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basketCountDatasource = new BehaviorSubject<number>(0);

  basketCount = this.basketCountDatasource.asObservable();

  constructor(private http: HttpClient) {}

  addProductToBasket(myBasket: IBasket): Observable<IBasket> {
    return this.http.post(environment.apiUrl + 'addBasket', myBasket);
  }

  getProductBasketbyUserId(idUser: number): Observable<IBasket> {
    return this.http.get(
      environment.apiUrl + 'getBasketByIdUser?idUser=' + idUser
    );
  }

  deleteProductFromBasketById(idBasket: number): Observable<any> {
    return this.http.delete(
      environment.apiUrl + 'deleteProductFromBasket?idBaskest=' + idBasket
    );
  }

  getListBasketLenght(idUser: number): Observable<any> {
    return this.http.get(
      environment.apiUrl + 'getListBasketLenght?idUser=' + idUser
    );
  }

  changebasketCount(value: number): void {
    this.basketCountDatasource.next(value);
  }

  setbasketCount(value: number): void {
    localStorage.setItem('cart_count', JSON.stringify(value));
  }
  getbasketCount() {
    return localStorage.getItem('cart_count');
  }
}
