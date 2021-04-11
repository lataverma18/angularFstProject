import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emp } from 'src/Emp';
import {HttpCallService} from '../services/http-call.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
showQuestion:boolean=false;
id:'';
emp:Emp={"id":102,"name":"Rohit","salary":85000};

  constructor(private hpc:HttpCallService,private acr:ActivatedRoute) {
    /*this.acr.queryParams.subscribe((res)=>this.showQuestion=res['ques']);
    console.log(this.showQuestion);*/

   }
   getProcess()
   {
    this.hpc.toGetAll().subscribe(
      (res)=>console.log(res),
      (error)=>{
       
          console.log(error)
      },
      ()=>console.log("Completed"));
   }
   getProcessforId()
   {
    this.hpc.toGetForId(this.id).subscribe((res)=>console.log(res));
   }
   postProcess()
   {
     console.log(this.hpc.toPost(this.emp));
   }
   putProcess()
   {
    console.log(this.hpc.toUpdate(this.id,this.emp));
   }
   deleteProcess()
   {
    console.log(this.hpc.toDelete(this.id));
   }
  ngOnInit(): void {
    
  }

}
