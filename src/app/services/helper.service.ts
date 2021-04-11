import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
sharableData=new Subject<string>();
  constructor() { }
}
