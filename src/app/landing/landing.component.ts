import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  ngOnInit() {
    this.getBannerImages();
  }
  getBannerImages(){
    console.log("get")
    this.sharedService.request('get', 'core/banner', null, {}).subscribe(
      res=>{
        this.images = res.data;
      },
      error=>{
        console.log(error)

      }
    );
  }

}
