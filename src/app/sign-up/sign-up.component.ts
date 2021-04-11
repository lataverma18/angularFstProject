import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit,OnChanges {
@ViewChild('f') signForm: NgForm;
name="Put Surname First";
contacts={'email':'','phone':0};
  constructor() { 
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.name=this.signForm.controls['name'].value;
    console.log(this.signForm.controls['contacts'].value);
  }

  submit()
  {
    console.log(this.signForm);
  }
  ngOnInit(): void {
  }

}
