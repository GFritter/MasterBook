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

  showFooter:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast:ToastController, private dbProvider:DatabaseProvider,private userProvider:UserProvider) {


     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharListPage');
   // this.getAllCharacters();
  }

  ionViewDidEnter()
  {
    //this.getAllCharacters();
  }

  ionViewWillEnter()
  {
    this.getAllCharacters();
  }

  getAllCharacters()
  {
    this.dbProvider.getAllCharacters(null,this.userProvider.userId)
    .then((result:any[]) =>
    {
      this.characters =result;

    })
  }

  delete(id:number)
  {
    this.dbProvider.removeCharacter(id,this.userProvider.userId)
    this.getAllCharacters();
  }

  goToCreate(param = null)
  {
    this.navCtrl.push(CreateCharPage,param);

  }

  goToDetails(id:number)
  {
    this.dbProvider.getCharacter(id,this.userProvider.userId)
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
