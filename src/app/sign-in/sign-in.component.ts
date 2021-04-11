import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
signInForm: FormGroup;
  constructor(private fb:FormBuilder) { }
public get username()
{
  return this.signInForm.get('username');
}
  ngOnInit(): void {
   this.signInForm=this.fb.group(
     {
       username:['username received from cmpny',[Validators.required
        ,this.shouldNotContainSpace]],
       password:['password set by you',Validators.required],
       type:this.fb.group({
         aradio:[''],
         uradio:['']
       })
     }
   );
  }
  shouldNotContainSpace(control:AbstractControl):ValidationErrors|null
  {
      if((control.value as string).indexOf(' ')!=-1)
        return {containSSpace:true}
        else
        return null;
  }
  submit()
  {
    console.log(this.signInForm);
  }
}
