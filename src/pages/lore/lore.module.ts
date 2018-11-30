import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LorePage } from './lore';

@NgModule({
  declarations: [
    LorePage,
  ],
  imports: [
    IonicPageModule.forChild(LorePage),
  ],
})
export class LorePageModule {}
