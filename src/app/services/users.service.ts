import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  cars = [
    'Ford','Chevrolet','Buick'
  ];

  constructor() { }

  myData(){
      return "Some data!"
  }

}
