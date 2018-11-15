import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as constants from '../../shared/constants';

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
    this.item = constants.items.find(it=>it.id == this.item_id);
  }

}
