import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UserProvider } from '../../providers/user/user';
import { Note } from '../../assets/classes/Note';

/**
 * Generated class for the CreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  temp:Note;
  showFooter:boolean;

  edit:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public userProvider:UserProvider) {
  this.temp = new Note();
  this.edit=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNotePage');
    if(this.navParams.data[0] != null)
    {
      this.temp = this.navParams.data;
      this.edit=true;

    }
  }

  addNote()
  {
    this.dbProvider.insertNote(this.temp,this.userProvider.userId);
    this.temp= new Note();
    this.navCtrl.pop();
  }

  saveNote()
  {
    this.dbProvider.updateNote(this.temp,this.userProvider.userId);
    this.temp=new Note();
    this.navCtrl.pop();
  }
  
  buttonAction()
  {
    if(this.edit)
      {this.saveNote();}

    else
      {this.addNote();}
  }

  setFooter(b:boolean)
  {
    this.showFooter=b;
  }

}
