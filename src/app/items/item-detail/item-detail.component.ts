import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  public item_id: number;
  public item;
  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private cartService: CartService,
  ) { 
    this.route.params.subscribe(params => {
      this.item_id = params['item_id'];
      this.getItem();
      // this.getComments();
    });
  }

  ngOnInit() {
  }
  getItem(){
    this.sharedService.request('get', `core/item/${this.item_id}`, null, {}).subscribe(
      res=>{
        console.log(res)
        this.item = res.data;
      },
      error=>{
        console.log(error)
      }
    );
  }
  addToCart(){
    console.log(this.cartService.addToCart(this.item));
  }

}
