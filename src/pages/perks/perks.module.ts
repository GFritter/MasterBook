import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerksPage } from './perks';

@NgModule({
  declarations: [
    PerksPage,
  ],
  imports: [
    IonicPageModule.forChild(PerksPage),
  ],
})
export class PerksPageModule {}
