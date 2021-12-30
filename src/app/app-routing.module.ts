import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterAuthGuard } from './_core/guards/after-auth.guard';
import { AuthGuard } from './_core/guards/auth.guard';


const routes: Routes = [
   
  {
    path : '',
    redirectTo :'/login',
    pathMatch :'full'
  },

  {
    path : 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    , canActivate :[AfterAuthGuard]
  },
 
  {
    path : 'stickers',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
   ,canActivate :[AuthGuard]
  
  },

  {
    path : '**',
    redirectTo :'/login',
    pathMatch :'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
