import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataService } from '../services/data.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  
})
export class ContentComponent implements OnInit {
transferVal='';
text="Content";
show:boolean=true;
empId:string='empPROD101';
@Output() displayUser=new EventEmitter<string>();
@Input()  cn:string;
t:boolean=false;
users=[{userid:101,username:'Ronit'},{userid:102,username:'Rohit'},{userid:103,username:'Rita'}]
emps:{empId:string,empName:string,empSalary:number}[];
constructor(private ds:DataService,private helper:HelperService, private router : Router) { 
this.emps=ds.employees;
}
transferValue()
{
  this.t=!this.t;
  this.transferVal="Value from Parent";
}
showNavigated()
  {
   
   this.helper.sharableData.next('Sign In');
    this.router.navigate(['/signin']);
  }
  showSignUp()
  {

this.helper.sharableData.next('Sign Up');
    this.router.navigate(['/signup']);
  }
  transfer()
  {
    this.displayUser.emit("Lata Verma");
  }
giveStyles()
{
  return "{'background-color':'blue'}";
}
  ngOnInit(): void {
  }

}
