import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: LandingComponent, pathMatch: 'full'},
  { path: 'shop', loadChildren: './items/items.module#ItemsModule'},
  { path: 'cart', component: CartComponent, pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
