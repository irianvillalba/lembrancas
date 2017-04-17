import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Config } from '../config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonClicked : boolean = false;


  constructor(public navCtrl: NavController) {

  }

  getConfig(){
    this.navCtrl.setRoot(Config);
  }

  isButtonToggle():void{
    this.buttonClicked = !this.buttonClicked;
  }

}
