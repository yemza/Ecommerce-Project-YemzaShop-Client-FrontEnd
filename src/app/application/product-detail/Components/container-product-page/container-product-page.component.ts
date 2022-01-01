import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IBasket } from 'src/app/_core/models/i-basket';
import { IProduct } from 'src/app/_core/models/i-product';
import { BasketService } from 'src/app/_core/services/basket.service';
import { NotificationService } from 'src/app/_core/services/notification.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { TokenService } from 'src/app/_core/services/token.service';

@Component({
  selector: 'app-container-product-page',
  templateUrl: './container-product-page.component.html',
  styleUrls: ['./container-product-page.component.css']
})
export class ContainerProductPageComponent implements OnInit,OnDestroy {
   productId : any ;
   productSelected! : IProduct;
   ProductFormGroup! : FormGroup ;

   private subs = new Subscription();



   
   constructor(private route: ActivatedRoute,
                private productService :ProductService ,
                private basketService : BasketService,
                private tokenService :TokenService,
                private fb : FormBuilder,
                private notification: NotificationService,
                private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductById();

    this.ProductFormGroup = this.fb.group({
      quantity : [1 , Validators.required]
    })
  }

  getProductById(){
    this.subs.add(
      this.productService.getProductById(this.productId).subscribe(response =>{
        this.productSelected =response
      })
    )
  }

  addProductToCard(event : any){
    let myBasket : IBasket
    myBasket ={id : null , 
              quantity: event.quantity,
              product : event.productEntityDAO,
              user : {
                id : this.tokenService.getId(),
              }}
     this.basketService.addProductToBasket(myBasket).subscribe(res=>{
       console.log(res);
       this.notification.success('success',"product added successfully to your shopping cart")
     })        
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    }
}