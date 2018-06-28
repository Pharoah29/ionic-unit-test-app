import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyServiceProvider Provider');
  }

  getData(){
    
    return this.http.get("https://randomuser.me/api/?results=50").pipe(map((res : any) => res.results))
  } 
 
}
