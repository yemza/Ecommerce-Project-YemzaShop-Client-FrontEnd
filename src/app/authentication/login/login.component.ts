import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';
import { ReactiveFormsService } from 'src/app/_core/services/reactive-forms.service';
import { TokenService } from 'src/app/_core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup ;
  private subs = new Subscription();


  constructor(private fb : FormBuilder , 
              private router: Router,
              private  tokenService:TokenService,
              private  quthenticationService: AuthenticationService ,
              private  reactiveFormsService: ReactiveFormsService) { }

  ngOnInit(): void {
    /**Create the form */
    this.createLoginFormGroup()
  }


  /**
   * Create Loging Form Group
   * To get User Data
   */
  createLoginFormGroup(){
    this.loginFormGroup = this.fb.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    })

  }

  /**
   * Submit Request Login User
   */
   onSubmit(){
   console.log(this.loginFormGroup?.get('username')?.invalid)
   if(this.loginFormGroup.valid){
     this.subs.add(
      this.quthenticationService.Login(this.loginFormGroup?.value,  {skip_token:'true'}
        ).subscribe(
        res =>{
          this.handelToken(res);
        }
      ))
   }else{
     this.reactiveFormsService.validateAllFormFields(this.loginFormGroup)
   }
  }


  /**
   * handling the token From the backEnd
   */
   handelToken(response : any ){
      this.tokenService.handle(response);
      if(this.tokenService.loggedIn()){
        this.router.navigateByUrl('/stickers/home');
      }
   }

  /**
   * On Destroy
   * To destroy All Services
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    }

}
