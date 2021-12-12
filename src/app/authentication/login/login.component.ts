import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';
import { ReactiveFormsService } from 'src/app/_core/services/reactive-forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup ;
  private subs = new Subscription();


  constructor(private fb : FormBuilder , 
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
          console.log(res)
        }
      ))
   }else{
     this.reactiveFormsService.validateAllFormFields(this.loginFormGroup)
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
