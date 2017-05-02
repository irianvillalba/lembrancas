import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*import { EnviouComponent } from "./enviouComponent/";*/
/*import { RecebeuComponent } from "./recebeuComponent/";*/

 /*import { Config } from '../config/config';*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonClicked1 : boolean = true;
  buttonClicked2 : boolean = false;
  public card : Array<string>;
  
  constructor(public navCtrl: NavController,  public navParams: NavParams) {
      this.card = ["card1", "card2", "card3"]

  }

  /*getConfig(){
    this.navCtrl.setRoot(Config);
  }*/

  isButtonToggle(x):void{
    switch(x){
      case 1:
        this.buttonClicked1 = !this.buttonClicked1  
        if(this.buttonClicked2 = true){
            this.buttonClicked2 = !this.buttonClicked2;
        }
        break;
      case 2:
        this.buttonClicked2 = !this.buttonClicked2;
        if (this.buttonClicked1 = true){
            this.buttonClicked1 = !this.buttonClicked1;
        }
        break;
    }
  }
    
 
}
