import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Character } from '../../assets/classes/Character';

/**
 * Generated class for the LorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lore',
  templateUrl: 'lore.html',
})
export class LorePage {

  actual:Character

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LorePage');
    this.actual = this.userProvider.tempC;
  }

}
