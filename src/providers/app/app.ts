import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public http: HttpClient, private storage:Storage) {
    console.log('Hello AppProvider Provider');
  }

  async fromStorage<T>(key:string){

   let val = await this.storage.get(key);

   return JSON.parse(val) as T;

  }

  toStorage(key:string,item: any){

   this.storage.set(key,item);
 
   }

}
