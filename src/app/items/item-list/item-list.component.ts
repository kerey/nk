import { Component, OnInit } from '@angular/core';

import * as constants from '../../shared/constants';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public items = [];

  constructor() { }

  ngOnInit() {
    this.items = constants.items;
  }

}
