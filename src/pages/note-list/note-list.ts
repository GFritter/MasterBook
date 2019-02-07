import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UserProvider } from '../../providers/user/user';
import { CreateNotePage } from '../create-note/create-note';
import { NoteDetailsPage } from '../note-details/note-details';

/**
 * Generated class for the NoteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-list',
  templateUrl: 'note-list.html',
})
export class NoteListPage {

  notes:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbProvider:DatabaseProvider,public userProvider:UserProvider) {
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteListPage');
  }

  ionViewWillEnter()
  {
    this.getAllNotes();
  }

  getAllNotes()
  {
    
    this.dbProvider.getAllNotes(null,this.userProvider.userId)
    .then((data:any[])=>
    {
      this.notes=data;
    });

  }


  goToCreateNote()
  {
  
    this.navCtrl.push(CreateNotePage,null);
  }

  goToCreateNoteEdit(n)
  {
  
    this.navCtrl.push(CreateNotePage,n);
  }

  goToDetails(id:number)
  {
    this.dbProvider.getNote(id,this.userProvider.userId).then((data:any)=>
  {
    this.userProvider.tempN = data;
  })
  ;
    this.navCtrl.push(NoteDetailsPage);
  }

  delete(id:number)
  {

    this.dbProvider.removeNotes(id,this.userProvider.userId);
    this.getAllNotes();
  
  }

}
