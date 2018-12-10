import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpellDetailsPage } from './spell-details';

@NgModule({
  declarations: [
    SpellDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpellDetailsPage),
  ],
})
export class SpellDetailsPageModule {}
