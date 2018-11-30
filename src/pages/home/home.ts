import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database'

import {Character} from '../../assets/classes/Character'
import { UserProvider } from '../../providers/user/user';
import { CharListPage } from '../char-list/char-list';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characters:any[] = [];

  temp:Character;

  username:string;


  constructor(public navCtrl: NavController, private toast:ToastController, private dbProvider:DatabaseProvider,userProvider:UserProvider) {

    this.username = userProvider.userName;


  }

  goToCharList()
  {
    this.navCtrl.push(CharListPage);
  }



}
