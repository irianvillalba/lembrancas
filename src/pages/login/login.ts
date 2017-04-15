import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Feed } from '../feed/feed';
import { Termos } from '../termos/termos';
import { Saiba } from '../saiba/saiba';
import { Politica } from '../politica/politica';
import { Logar } from '../logar/logar';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  feedPage = Feed;
  saibaPage = Saiba;
  termosPage = Termos;
  politicaPage = Politica;
  logarPage = Logar;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {


  }

    ionViewDidEnter(){
      this.menu.enable(false);
    }

    ionViewDidLeave(){
      this.menu.enable(true);
    }

    getLogar(){
      this.navCtrl.setRoot(HomePage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
