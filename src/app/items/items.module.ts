import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ItemListComponent, ItemPreviewComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
