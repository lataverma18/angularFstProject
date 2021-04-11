import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'MyFstProject';
  code=1234;
  isDisabled=false;
  date=new Date();
  currency=12000;
  code1='EMP011';
  companyName:string="ABC Pvt.Ltd.";
  value:string
  getVal(val:string)
  {
      this.value=val;
  }

  getTitle():string{
    return this.title;
  }
  getCode():number{
    return this.code;
  }
  toggle()
  {
    this.isDisabled=!this.isDisabled;
  }
}
