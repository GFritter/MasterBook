import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Note } from '../../assets/classes/Note';

/**
 * Generated class for the NoteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-details',
  templateUrl: 'note-details.html',
})
export class NoteDetailsPage {

  actual:Note;

  constructor(public navCtrl: NavController, public navParams: NavParams,public user:UserProvider) {
  
    this.actual = new Note;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetailsPage');
  }

  ionViewWillEnter()
  {
    this.actual = this.user.tempN;
  }


}
