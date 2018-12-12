import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Character} from '../../assets/classes/Character';
import {Item} from '../../assets/classes/Item';
import {Spell} from '../../assets/classes/Spell';
import { Note} from '../../assets/classes/Note';
import { FirebaseProvider } from '../firebase/firebase';
import { Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  userId:string;
  userName:string;

  tempC:Character;
  tempI:Item;
  tempS:Spell;
  tempN:Note




  constructor(public fbProvider:FirebaseProvider) {
    console.log('Hello UserProvider Provider');
    this.tempC = new Character();
    this.tempI = new Item();
    this.tempS = new Spell();
    this.tempN = new Note();
  }

  async load()
  {
    this.userId = this.fbProvider.getUID();

    this.userName = this.fbProvider.getUsername();
  }

}
