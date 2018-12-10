import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Item } from '../../assets/classes/Item';

/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

  actual:Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserProvider) {
    this.actual=new Item();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
  }

  ionViewWillEnter()
  {
    this.actual = this.user.tempI;
  }

}
