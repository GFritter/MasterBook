import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCharPage } from './create-char';

@NgModule({
  declarations: [
    CreateCharPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCharPage),
  ],
})
export class CreateCharPageModule {}
