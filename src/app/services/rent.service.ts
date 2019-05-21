import { Injectable } from '@angular/core';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {

rentList: AngularFireList<any>;

selectRent:Rent = new Rent();

  constructor(private firebase: AngularFireDatabase) { }

  getRents(){
    return this.rentList = this.firebase.list('rents');
  }

  insertRent(rent: Rent){
      this.rentList.push({
        nombre: rent.nombre,
        vehicle: rent.vehicle,
        accesories: rent.accesories
      });
  }

  updateRent(rent: Rent){
    this.rentList.update(rent.$key,{
      nombre: rent.nombre,
      vehicle: rent.vehicle,
      accesories: rent.accesories
    });
  }

  deleteRent($key: string){
    this.rentList.remove($key);
  }
}
