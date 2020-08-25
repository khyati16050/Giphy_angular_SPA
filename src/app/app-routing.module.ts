import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninModule} from './signin/signin.module';
import {LoginComponent} from './signin/login/login.component';
import {GifsdisplayComponent} from './gifsdisplay/gifsdisplay.component';
import { CanActivateRouteGuard } from './auth.guard';
import {FavouriteComponent} from './favourite/favourite.component'



const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: GifsdisplayComponent
  },
  {
    path: 'favourites',
    canActivate: [CanActivateRouteGuard],
    component: FavouriteComponent
  },
  {
    path: '', //default
    component: GifsdisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
