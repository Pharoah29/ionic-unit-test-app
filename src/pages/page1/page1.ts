import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

declare function require(url: string);

const users = require('../../assets/users.data.json');


@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public appProvider: AppProvider) {
  
    const myName = this.appProvider.fromStorage("my-object");
     debugger;
  } 

}


