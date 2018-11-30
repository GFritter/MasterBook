import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharDetailsPage } from './char-details';

@NgModule({
  declarations: [
    CharDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CharDetailsPage),
  ]
})
export class CharDetailsPageModule {}
