import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from '../app/app.component';
import { HomePage } from '../pages/home/home';


import {SQLite} from '@ionic-native/sqlite';

import {DatabaseProvider} from '../providers/database/database';
import { CharListPage } from '../pages/char-list/char-list';
import { CreateCharPage } from '../pages/create-char/create-char';
import {CharDetailsPage} from '../pages/char-details/char-details';
import {LoginPage} from '../pages/login/login'

import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharListPage,
    CreateCharPage,
    CharDetailsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharListPage,
    CreateCharPage,
    CharDetailsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    UserProvider
  ]
})
export class AppModule {}
