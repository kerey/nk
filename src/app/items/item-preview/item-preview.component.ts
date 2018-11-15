import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {
  
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
