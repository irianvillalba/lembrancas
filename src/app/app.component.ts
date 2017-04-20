import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Ajuda } from '../pages/ajuda/ajuda';
import { Timeline } from '../pages/timeline/timeline';
import { Senhamodal } from '../pages/senhamodal/senhamodal';
import { Config } from '../pages/config/config';


;@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;
  homePage = HomePage;
  ajudaPage = Ajuda;
  timePage = Timeline;
  loginPage = Login;
  configPage = Config;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(p) {
    this.rootPage = p;
  }

  showModal(){
    let modalSenha = this.modalCtrl.create(Senhamodal);
    modalSenha.present();
  }

}
