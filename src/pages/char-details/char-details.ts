import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CharDetailsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-char-details',
  templateUrl: 'char-details.html'
})
export class CharDetailsPage {



  statsRoot = 'StatsPage'
  perksRoot = 'PerksPage'
  loreRoot = 'LorePage'
  magicRoot = 'MagicPage'


  constructor(public navCtrl: NavController) 
  {
    
  }

}
