import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Spell } from '../../assets/classes/Spell';
import { DatabaseProvider } from '../../providers/database/database';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the CreateSpellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-spell',
  templateUrl: 'create-spell.html',
})
export class CreateSpellPage {

  temp:Spell
  showFooter:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public userProvider:UserProvider) {
  this.temp=new Spell;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSpellPage');
    if(this.navParams.data)
      this.temp = this.navParams.data;
  }

  addSpell()
  {
    this.dbProvider.insertSpell(this.temp,this.userProvider.userId);
    this.temp = new Spell;
    this.navCtrl.pop();
  }

  setFooter(b:boolean)
  {
    this.showFooter=b;
  }

 

}
