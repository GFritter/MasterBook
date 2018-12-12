import { Injectable } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';
import { UserProvider } from '../user/user';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(private afAuth:AngularFireAuth, private afDatabase:AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  async login (email:string,password:string,user:UserProvider)
  {
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      console.log(result);

      if(result)
      {
        await this.afAuth.authState.take(1).subscribe(data =>
        {
          user.userId=data.uid;
          console.log("setei o id" +user.userId+data.uid);
         let username = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
          

          username.take(1).subscribe((v:any) => {
            console.log(v);
            user.userName=v;
      
          });

        })  
        
        
        
        return true;
        
      }

      else{
        return false;
      }

    }
    catch(e)
    {
      console.error(e);
    }



  }

  async register(email:string,password:string)
  {
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
      console.log(result);
    }
    catch(e)
    {
      console.error(e);
    }

  }

  saveUsername(username:string)
  {
    try{
      this.afAuth.authState.take(1).subscribe(auth =>
      {
        this.afDatabase.object(`profile/${auth.uid}`).set(username);
      })
    }
    catch(e)
    {
      console.error(e);

    }

  }

   getUsername()
  {
    let username:Observable<any>;
    let usernameString:string;
    this.afAuth.authState.take(1).subscribe(data =>
    {

      username = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
      console.log("to pgando o username"+username+data)
    })  
    username.subscribe(v => {
      usernameString=v;

    })
    return usernameString;
  }

  getUID()
  {
    let uid:string;
     this.afAuth.authState.take(1).subscribe(data =>
    {
      console.log("to pegando o userID" +data);
      uid =  data.uid;
    })

    return uid;
  }

}
