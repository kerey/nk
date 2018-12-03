import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public items = [];

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(){
    this.sharedService.request('get', 'core/item', null, {}).subscribe(
      res=>{
        console.log(res)
        this.items = res.data;
      },
      error=>{
        console.log(error)
      }
    );
  }

}
