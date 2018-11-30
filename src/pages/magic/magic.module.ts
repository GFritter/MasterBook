import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagicPage } from './magic';

@NgModule({
  declarations: [
    MagicPage,
  ],
  imports: [
    IonicPageModule.forChild(MagicPage),
  ],
})
export class MagicPageModule {}
