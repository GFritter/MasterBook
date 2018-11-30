import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UserProvider} from '../../providers/user/user'
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public userProvider:UserProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  setName()
  {
    this.userProvider.userName = this.username;
    this.navCtrl.setRoot(HomePage);
  }

}
