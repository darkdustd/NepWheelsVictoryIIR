import { Component, OnInit } from '@angular/core';

import { RentService } from '../services/rent.service';
import { NgForm } from '@angular/forms';
import { Rent } from '../models/rent';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private rentService: RentService) { }

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
