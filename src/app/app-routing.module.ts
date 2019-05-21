import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NerrpComponent} from './nerrp/nerrp.component';
import {RentComponent} from './rent/rent.component';
import {AdminComponent} from './admin/admin.component';
import {ReserveComponent} from './reserve/reserve.component';
import {MapComponent} from './map/map.component';
import {PaymentComponent} from './payment/payment.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {SigninComponent} from './signin/signin.component';
import { ParkingAdminComponent } from './parking-admin/parking-admin.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Rent', component: RentComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Reserve', component: ReserveComponent},
  {path: 'Map', component: MapComponent},
  {path: 'Pay', component: PaymentComponent},
  {path: 'GM', component: GoogleMapComponent},
  {path: 'Signin', component: SigninComponent},
  {path: 'parkingAdmin', component: ParkingAdminComponent},
  {path: '**', component: NerrpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
