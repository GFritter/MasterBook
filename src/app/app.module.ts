import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from '../app/app.component';
import { HomePage } from '../pages/home/home';

import {SQLite} from '@ionic-native/sqlite';

import {AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import {DatabaseProvider} from '../providers/database/database';
import { UserProvider } from '../providers/user/user';
import {FirebaseProvider} from '../providers/firebase/firebase'

import { CharListPage } from '../pages/char-list/char-list';
import { CreateCharPage } from '../pages/create-char/create-char';
import {CharDetailsPage} from '../pages/char-details/char-details';
import {LoginPage} from '../pages/login/login'

import { ItemListPage } from '../pages/item-list/item-list';
import { CreateItemPage } from '../pages/create-item/create-item';
import { SpellListPage } from '../pages/spell-list/spell-list';
import { CreateSpellPage } from '../pages/create-spell/create-spell';
import { CreateNotePage } from '../pages/create-note/create-note';
import { NoteDetailsPage } from '../pages/note-details/note-details';
import { NoteListPage } from '../pages/note-list/note-list';
import { AngularFireModule } from '../../node_modules/@angular/fire';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { RegisterPage } from '../pages/register/register';

//inclui os imports e declara eles no NGModule para que a ionic reconhe;a nas suas fun;oes
//eh aqui que tu vai incluir algum provider externo, ou pagina nova.


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharListPage,
    CreateCharPage,
    CharDetailsPage,
    LoginPage,
    ItemListPage,
    CreateItemPage,
    SpellListPage,
    CreateSpellPage,
    CreateNotePage,
    NoteDetailsPage,
    NoteListPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharListPage,
    CreateCharPage,
    CharDetailsPage,
    LoginPage,
    ItemListPage,
    CreateItemPage,
    SpellListPage,
    CreateSpellPage,
    CreateNotePage,
    NoteDetailsPage,
    NoteListPage,
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    UserProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
