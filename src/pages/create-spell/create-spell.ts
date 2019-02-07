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
  edit:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public userProvider:UserProvider) {
  this.temp=new Spell;
  this.edit = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSpellPage');
    if(this.navParams.data[0] !=null)
    {
      this.temp = this.navParams.data;
      this.edit = true;

      console.log("entering in edit mode because" + this.navParams.data);
    }
  }

  addSpell()
  {
    this.dbProvider.insertSpell(this.temp,this.userProvider.userId);
    this.temp = new Spell;
    this.navCtrl.pop();
  }

  saveSpell()
  {
    this.dbProvider.updateSpell(this.temp,this.userProvider.userId);
    this.temp = new Spell;
    this.navCtrl.pop();

  }

  buttonAction()
  {
    if(this.edit)
      {this.saveSpell();}

    else 
    { this.addSpell();}
  }

  setFooter(b:boolean)
  {
    this.showFooter=b;
  }

 

}
