import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

import {Character} from '../../assets/classes/Character'

import{CreateCharPage} from '../create-char/create-char'
import { UserProvider } from '../../providers/user/user';
import { CharDetailsPage } from '../char-details/char-details';

/**
 * Generated class for the CharListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-char-list',
  templateUrl: 'char-list.html',
})
export class CharListPage {

  characters :any [] = [];
  temp:Character;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toast:ToastController, private dbProvider:DatabaseProvider,private userProvider:UserProvider) {


     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharListPage');
    this.getAllCharacters();
  }

  ionViewDidEnter()
  {
    this.getAllCharacters();
  }

  getAllCharacters()
  {
    this.dbProvider.getAllCharacters()
    .then((result:any[]) =>
    {
      this.characters =result;

    })
  }

  delete(id:number)
  {
    this.dbProvider.removeCharacter(id)
    this.getAllCharacters();
  }

  goToCreate()
  {
    this.navCtrl.push(CreateCharPage);

  }

  goToDetails(id:number)
  {
    this.dbProvider.getCharacter(id)
    .then((result:any) =>
  {
    this.temp = result;
    console.log("peguei o " + this.temp.name);
    this.userProvider.tempC = this.temp;

    

  })
  .catch((e)=>console.log(e));
  
  this.navCtrl.push(CharDetailsPage);
  
  }
}
