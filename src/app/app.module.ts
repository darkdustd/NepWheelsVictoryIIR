import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NerrpComponent } from './nerrp/nerrp.component';
import {FormsModule} from '@angular/forms';
import { NaviationComponent } from './naviation/naviation.component';
import { RentComponent } from './rent/rent.component';
import { AdminComponent } from './admin/admin.component';
import { ReserveComponent } from './reserve/reserve.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { PaymentComponent } from './payment/payment.component';

import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { RentService } from './services/rent.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GoogleMapComponent } from './google-map/google-map.component';
import { SigninComponent } from './signin/signin.component';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireAuth } from '@angular/fire/auth';
import { ParkingAdminComponent } from './parking-admin/parking-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NerrpComponent,
    NaviationComponent,
    RentComponent,
    AdminComponent,
    ReserveComponent,
    MapComponent,
    PaymentComponent,
    GoogleMapComponent,
    SigninComponent,
    ParkingAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [MessageService, AngularFireAuth, RentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
