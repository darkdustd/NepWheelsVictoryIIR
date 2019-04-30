import { Component, OnInit } from '@angular/core';
import { MessageService } from '/Users/saitohiraga/NepWheels_RomVersion/src/app/services/message.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public _MessageService: MessageService) {
  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {

    });
  }

  ngOnInit() {
  }

  
}
