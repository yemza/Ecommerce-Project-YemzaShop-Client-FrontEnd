import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../models/i-category";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn :"root"
})
export  class CategoryService{

  constructor(private http : HttpClient) {
  }


  getAllCategory(): Observable<ICategory>{
    return this.http.get<ICategory>(environment.apiUrl.concat("categories"))
  }
}
