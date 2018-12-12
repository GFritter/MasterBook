import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UserProvider} from '../../providers/user/user'
import { HomePage } from '../home/home';
import { FirebaseApp } from '../../../node_modules/@angular/fire';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { RegisterPage } from '../register/register';

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

  email:string='';password:string='';


  constructor(public navCtrl: NavController, public navParams: NavParams,public userProvider:UserProvider,public fbProvider:FirebaseProvider) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 async login()
 {
    if(this.fbProvider.login(this.email,this.password,this.userProvider))
    {
      
   
      this.navCtrl.setRoot(HomePage);
    }

 }

 goToRegister()
 {
   this.navCtrl.push(RegisterPage);
 }

}
