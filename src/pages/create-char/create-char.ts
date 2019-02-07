import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Character } from '../../assets/classes/Character';
import { UserProvider } from '../../providers/user/user';
import { iterateListLike } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';

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
  edit:boolean;

  name:string;
  class:string;
  level:string;

  showFooter:boolean=true;


  constructor(public navCtrl: NavController, public navParams: NavParams,private dbProvider:DatabaseProvider,public userProvider:UserProvider) {
    this.temp = new Character();

    if(this.navParams.data[0] != null)
    {
      this.temp = this.navParams.data;
      this.edit = true;

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCharPage');
  }

  addCharacter()
  {
   
    this.dbProvider.insertCharacter(this.temp,this.userProvider.userId);
    this.temp=new Character();
    this.navCtrl.pop();
  }

  saveCharacter()
  {
    this.dbProvider.updateCharacter(this.temp,this.userProvider.userId);
    this.temp= new Character();
    this.navCtrl.pop();
  }

  buttonAction()
  {
    if(this.edit)
      this.saveCharacter();

    else 
      this.addCharacter();
  }


  setFooter(bool)
  {
    this.showFooter = bool
  }
}



