import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharListPage } from './char-list';

@NgModule({
  declarations: [
    CharListPage,
  ],
  imports: [
    IonicPageModule.forChild(CharListPage),
  ],
})
export class CharListPageModule {}
