import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feed } from '../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  feedPage=Feed;
  constructor(public navCtrl: NavController) {

  }

}
