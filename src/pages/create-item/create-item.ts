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
  edit:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public userProvider:UserProvider) {

    this.temp = new Item;
    this.edit = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateItemPage');
    if(this.navParams.data[0] != null)
     {
       this.temp=this.navParams.data;
       this.edit = true;
     }
  }

  addItem()
  {
    this.dbProvider.insertItem(this.temp,this.userProvider.userId);
    this.temp = new Item;
    this.navCtrl.pop();
  }

  saveItem()
  {
    this.dbProvider.updateItem(this.temp,this.userProvider.userId);
    this.temp = new Item;
    this.navCtrl.pop();
  }

  buttonAction()
  {
    if(this.edit==true)
      this.saveItem();

    else
      this.addItem();



  }

  setFooter(b:boolean)
  {
    this.showFooter=b;
  }



}
