import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import {Item} from '../../assets/classes/Item'
import { DatabaseProvider } from '../../providers/database/database';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CreateItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-item',
  templateUrl: 'create-item.html',
})
export class CreateItemPage {

  temp:Item;
  showFooter:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public user:UserProvider) {

    this.temp = new Item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateItemPage');
    if(this.navParams.data)
     this.temp=this.navParams.data;
  }

  addItem()
  {
    this.dbProvider.insertItem(this.temp);
    this.temp = new Item;
    this.navCtrl.pop();
  }

  setFooter(b:boolean)
  {
    this.showFooter=b;
  }



}
