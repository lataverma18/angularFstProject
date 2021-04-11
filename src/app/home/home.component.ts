import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,OnDestroy {
  //@Input() 
  subs:Subscription;
  valFromContent:string;
emps:{empId:string,empName:string,empSalary:number}[];
  constructor(private ds:DataService) { 
    this.valFromContent="ABC";
    console.log("Constructor");
this.emps=ds.employees;
  }
  ngOnDestroy(): void {
    console.log("ON Destroying");
    this.subs.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
  }
  delLast()
  {
    this.ds.employees.pop();
  }
  ngOnInit(): void {
    console.log("On Init");
   // this.subs=interval(1000).subscribe((next)=>console.log(next));
   const customObservable=Observable.create((observer)=>{
     let count=1;
     setInterval(()=>{
      //if(count>3)
      //observer.error("Count cannot be greater than 3");
      if(count>10)
        observer.complete();
       observer.next(count);
       count++;
     },1000);
   }
   );

   this.subs=customObservable.subscribe((res)=>console.log(res),(error)=>
   console.log("Couldn't get proper response"),
   ()=>console.log("Completed!!!"));
  }

}
