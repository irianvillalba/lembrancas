import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
/*import { Senhamodal } from '../senhamodal/senhamodal';*/


/**
 * Generated class for the Config page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class Config {

  constructor(public navCtrl: NavController, public navParams: NavParams /*public modalCtrl: ModalController*/) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Config');
  }

  /*showModal(){
    let modalSenha = this.modalCtrl.create(Senhamodal);
    modalSenha.present();
  }*/

}
