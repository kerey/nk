import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items = [];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.cartItems;
  }

}
