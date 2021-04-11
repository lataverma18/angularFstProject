import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
employees:{empId:string,empName:string,empSalary:number}[]=[
  {
    empId:'E101',
    empName:'Ronit',
    empSalary:80000
  },
  {
    empId:'E102',
    empName:'Rohit',
    empSalary:70000
  },
  {
    empId:'E103',
    empName:'Rita',
    empSalary:65000
  }
];
  constructor() { }
}
