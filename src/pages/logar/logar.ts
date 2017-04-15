import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Esqueceu } from '../esqueceu/esqueceu';
import { Feed } from '../feed/feed';
/**
 * Generated class for the Logar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-logar',
  templateUrl: 'logar.html',
})
export class Logar {

    esqueceuPage = Esqueceu;
    feedPage = Feed;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logar');
  }

  getLogar(){
    this.navCtrl.setRoot(HomePage);
  }

  isPasswordFieldType = false;
  togglePasswordFieldType():void{
    this.isPasswordFieldType = !this.isPasswordFieldType;
  }

}
