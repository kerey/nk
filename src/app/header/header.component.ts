import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean = true;
  pathname:string;

  constructor(
    private router: Router,
    config: NgbDropdownConfig,
  ){}

  ngOnInit() {
    this.pathname = location.pathname;
    // this.router.events
    //   .filter((event) => event instanceof NavigationEnd)
    //   .subscribe((event: any) => {
    //     this.showHeader = (event.url !== '/');
    //   });
  }

}
