import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database'

import {Character} from '../../assets/classes/Character'
import { UserProvider } from '../../providers/user/user';
import { CharListPage } from '../char-list/char-list';
import { ItemListPage } from '../item-list/item-list';
import { SpellListPage } from '../spell-list/spell-list';
import {NoteListPage} from '../note-list/note-list'
import { Observable } from '../../../node_modules/rxjs';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characters:any[] = [];

  temp:Character;

  username:string;


  constructor(public navCtrl: NavController, private toast:ToastController, private dbProvider:DatabaseProvider,public userProvider:UserProvider) {

    


  }

  ionViewWillEnter()
  {

    this.username=this.userProvider.userName;
  }

  goToCharList()
  {
    this.navCtrl.push(CharListPage);
  }

  goToItemList()
  {
    this.navCtrl.push(ItemListPage);
  }

  goToSpellList()
  {
    this.navCtrl.push(SpellListPage);
  }

  goToNoteList()
  {
    this.navCtrl.push(NoteListPage);
  }

}
