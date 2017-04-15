import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { HomePage } from '../home/home';
import { Logar } from '../logar/logar';

/**
 * Generated class for the Feed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class Feed {

  loginPage = Login;
  homePage = HomePage;
  logarPage = Logar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Feed');
  }

  getLogar(){
    this.navCtrl.setRoot(HomePage);
  }

}
