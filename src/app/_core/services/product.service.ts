import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }


   
  getAllProducts(): Observable<any>{
    return this.http.get(environment.apiUrl + "products");
  }

  getProductById(productId : any): Observable<any>{
    return this.http.get(environment.apiUrl + "productbyId?productId=" + productId);
  }


}
