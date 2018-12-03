import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { Response } from '../models/response.model';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CartService {
  
    public static SERVER_URL: string = 'http://api.nakey.kz/';

    constructor(
        public router: Router,
        private httpClient: HttpClient
    ){}

    addToCart(item){
        let items = this.cartItems;
        if(items.find(ii=>ii.id==item.id) != undefined){
           return { status: 'warning', text: 'Вы уже добавили в корзину' };
        } else {
            items.push(item)
            this.cartItems = items;
            return { status: 'success', text: 'Товар добавлен в корзину' };
        }
    }
    removeFromCart(item){
        let items = this.cartItems;
        let index = items.findIndex(ii=>item.id == ii.id);
        if(index > -1){
            items.splice(index, 1);
            this.cartItems = items;
        }
    }
    set cartItems(cars){
        window.localStorage.setItem('cartItems', JSON.stringify(cars));
    }
    get cartItems() {
        if (window.localStorage.getItem('cartItems')) {
            return JSON.parse(window.localStorage.getItem('cartItems'));
        }
        return [];
    }
}
