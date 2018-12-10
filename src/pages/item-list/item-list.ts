import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DatabaseProvider} from '../../providers/database/database'
import { CreateItemPage } from '../create-item/create-item';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  items:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public user:UserProvider) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');

  }

  ionViewWillEnter()
  {
    this.getAllItems();
  }


  getAllItems()
  {
    this.dbProvider.getAllItems().then((data:any[])=>
  {
    this.items = data;
  })
  }

  goToCreateItem(param=null)
  {
    this.navCtrl.push(CreateItemPage,param);
  }

  goToDetails(id:number)
  {
    this.user.tempI=this.items[id];
  }
  
  delete(id)
  {
    this.dbProvider.removeItem(id);
    this.getAllItems();
  }

}
