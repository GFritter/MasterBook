import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Character} from '../../assets/classes/Character';
import {Item} from '../../assets/classes/Item';
import {Spell} from '../../assets/classes/Spell';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  userId:number;
  userName:string;

  tempC:Character;
  tempI:Item;
  tempS:Spell;




  constructor() {
    console.log('Hello UserProvider Provider');
    this.tempC = new Character();
    this.tempI = new Item();
    this.tempS = new Spell();
  }

}
