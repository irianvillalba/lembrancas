import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*import { Config } from '../config/config';*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonClicked1 : boolean = false;
  buttonClicked2 : boolean = false;


  constructor(public navCtrl: NavController) {

  }

  /*getConfig(){
    this.navCtrl.setRoot(Config);
  }*/

  isButtonToggle(x):void{
    switch(x){
      case 1:
        this.buttonClicked1 = !this.buttonClicked1;
        break;
      case 2:
        this.buttonClicked2 = !this.buttonClicked2;
        break;
    }
  }

}
