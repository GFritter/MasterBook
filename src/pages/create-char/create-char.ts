import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Character } from '../../assets/classes/Character';

/**
 * Generated class for the CreateCharPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-char',
  templateUrl: 'create-char.html',
})
export class CreateCharPage {

  temp:Character;

  name:string;
  class:string;
  level:string;



  constructor(public navCtrl: NavController, public navParams: NavParams,private dbProvider:DatabaseProvider) {
    this.temp = new Character();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCharPage');
  }

  addCharacter()
  {
   
    this.dbProvider.insertCharacter(this.temp);
    this.temp=new Character();
  }



}
