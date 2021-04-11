import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
code:any;
  constructor(private aroute:ActivatedRoute) {
    //this.code=aroute.snapshot.params['code'];
    aroute.params.subscribe((res)=>this.code=res['code']);
   }

  ngOnInit(): void {
  }

}
