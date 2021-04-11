import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
linkInfo:any;
  constructor(private helper:HelperService) {
    this.helper.sharableData.subscribe((resp)=>this.linkInfo=resp); 
  }

  ngOnInit(): void {
  }

}
