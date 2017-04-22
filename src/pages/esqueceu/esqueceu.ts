import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';

/**
 * Generated class for the Esqueceu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-esqueceu',
  templateUrl: 'esqueceu.html',
})
export class Esqueceu {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Esqueceu');
  }

  getLogin(){
    this.navCtrl.setRoot(Login);
  }

}
