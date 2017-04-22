import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the Senhamodal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-senhamodal',
  templateUrl: 'senhamodal.html',
})
export class Senhamodal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Senhamodal');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  isSenhaView1 : boolean = true;
  isSenhaView2 : boolean = true;
  isSenhaView3 : boolean = true;
  toggleSenhaView(x):void{
    switch(x){
      case 1:
        this.isSenhaView1 = !this.isSenhaView1;
        break;
      case 2:
        this.isSenhaView2 = !this.isSenhaView2;
        break;
      case 3:
        this.isSenhaView3 = !this.isSenhaView3;
        break;
    }
  }

}
