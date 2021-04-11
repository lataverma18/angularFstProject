import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  code=101;

  constructor(private helper:HelperService) { }
  sentToService(str:string)
  {
this.helper.sharableData.next(str);
  }
  ngOnInit(): void {
  }

}
