import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderPlacedComponent } from './orders/order-placed/order-placed.component';
import { LoginComponent } from './Auth/login/login.component';


const routes: Routes = 
[
  {path : '', component: OrderPlacedComponent},
  {path : 'create', component: OrderCreateComponent},
  {path : 'edit/:postID', component: OrderCreateComponent},
  {path : 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
