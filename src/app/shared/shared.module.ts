import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ SharedService, CartService ]
})
export class SharedModule { }
