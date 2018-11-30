import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Character } from '../../assets/classes/Character';
import { DatabaseProvider } from '../../providers/database/database';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  actual:Character;


  constructor(public navCtrl: NavController, public navParams: NavParams,private dbProvider:DatabaseProvider,private userProvider:UserProvider) {
    
    this.actual = new Character();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
   
  }

  ionViewWillEnter()
  {console.log("vou entrar");
    this.actual = this.userProvider.tempC;
    console.log("carreguei o "  + this.actual.name);
  }

}
