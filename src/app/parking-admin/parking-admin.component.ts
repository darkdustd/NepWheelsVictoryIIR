import { Component, OnInit } from '@angular/core';

import { RentService } from '../services/rent.service';
import { NgForm } from '@angular/forms';
import { Rent } from '../models/rent';

@Component({
  selector: 'app-parking-admin',
  templateUrl: './parking-admin.component.html',
  styleUrls: ['./parking-admin.component.css']
})
export class ParkingAdminComponent implements OnInit {

rentList: Rent[];


  constructor(
    private rentService: RentService
  ) { }

  ngOnInit() {
    this.rentService.getRents()
    .snapshotChanges()
    .subscribe(item =>{
      this.rentList =[];
      item.forEach(element=>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.rentList.push(x as Rent);
      });
    });
  }

}
