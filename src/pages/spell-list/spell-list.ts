import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { CreateSpellPage } from '../create-spell/create-spell';
import { UserProvider } from '../../providers/user/user';
import { SpellDetailsPage } from '../spell-details/spell-details';

/**
 * Generated class for the SpellListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spell-list',
  templateUrl: 'spell-list.html',
})
export class SpellListPage {

  spells:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public userProvider:UserProvider) {
  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpellListPage');
    
  }

  ionViewWillEnter()
  {
    this.getAllSpells();
  }

  getAllSpells()
  {
    this.dbProvider.getAllSpells(null,this.userProvider.userId)
    .then((data:any[]) =>
  {
    this.spells = data;
  });
  
  }

  goToCreateSpell(param=null)
  {
    this.navCtrl.push(CreateSpellPage,param);
  }

  delete(id:number)
  {
    this.dbProvider.removeSpell(id,this.userProvider.userId);
    this.getAllSpells();
  }

  goToDetails(id:number)
  {
    this.dbProvider.getSpell(id,this.userProvider.userId).
    then((data:any)=>
  {
    this.userProvider.tempS = data;
  });

  this.navCtrl.push(SpellDetailsPage);
 }


  
}
