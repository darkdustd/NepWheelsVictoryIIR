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
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
