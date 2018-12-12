import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmailValidator } from '../../../node_modules/@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string;username:string;password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbProvider:FirebaseProvider, public toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register()
  {
    this.fbProvider.register(this.email,this.password);
    this.fbProvider.saveUsername(this.username);

    this.toast.create({
      message:"Register Succesfull",
      duration:3000
    }).present();

    this.email='';
    this.password='';
    this.username='';

  }

}
