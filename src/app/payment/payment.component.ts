import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { RentService } from '../services/rent.service';
import { NgForm } from '@angular/forms';
import { Rent } from '../models/rent';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public _MessageService: MessageService, private rentService: RentService) {
  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {

    });
  }

  ngOnInit() {
    this.rentService.getRents();
    this.resetForm();
  }

  onSubmit(rentForm: NgForm){
    this.rentService.insertRent(rentForm.value);
    this.resetForm(rentForm);
  }

  resetForm(rentForm?: NgForm){
    if(rentForm != null)
    rentForm.reset();
    this.rentService.selectRent = new Rent();
  }


}
