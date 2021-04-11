import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from 'src/Emp';


@Injectable({
  providedIn: 'root'
})
export class HttpCallService {
  url='/Phase2WebTraining/employees';
  constructor(private hp:HttpClient) { }

  toGetAll():Observable<any>
  {
      return this.hp.get(this.url);
  }
  toGetForId(id:any):Observable<any>
  {
    return this.hp.get(this.url+"/"+id);
  }
  toPost(emp:Emp):string
  {
    this.hp.post(this.url,emp).subscribe((res)=>console.log(res));
    return 'Added Successfully';
  }
  toUpdate(id:any,emp:Emp):string
  {
    this.hp.put(this.url+"/"+id,emp).subscribe((res)=>console.log(res));
    return 'Updated Successfully';
  }
  toDelete(id:any):string
  {
    this.hp.delete(this.url+"/"+id).subscribe(
    (res)=>console.log(res),
    (error)=>console.log(error),
    ()=>console.log("Completed")
    );
    return 'Deleted Successfully';
  }
}
