
import { Injectable } from '@angular/core';
import {SQLite,SQLiteObject} from '@ionic-native/sqlite'

import {Character} from '../../assets/classes/Character'
import { Item } from '../../assets/classes/Item';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite:SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  
  public getDB()
  {
    return this.sqlite.create({
      name:'database.db',
      location:'default'
    });
  }


  public createDatabase()
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    this.createTable(db);

  })
  .catch(e=> console.log(e));
  }

  private createTable (db:SQLiteObject)
  {
    db.sqlBatch([
     // ['CREATE TABLE IF NOT EXISTS character(id integer primary key AUTOINCREMENT NOT NULL, name TEXT, class TEXT, level TEXT)']
      ['CREATE TABLE IF NOT EXISTS characters(id integer PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, class TEXT,race TEXT, level TEXT, alignment TEXT, experience INTEGER, hp INTEGER,hp_max INTEGER,ac NUMBER, strength NUMBER, dexterity NUMBER, constitution NUMBER, inteligence NUMBER, wisdom NUMBER, charisma NUMBER,lore TEXT, background TEXT, visual TEXT, img_url TEXT,inventory_id NUMBER, grimoire_id NUMBER)']
      ['CREATE TABLE IF NOT EXISTS spells(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT,type TEXT, level NUMBER, casting TEXT, range TEXT, components TEXT, duration TEXT, description TEXT )']
      ['CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, value TEXT, function TEXT, description TEXT, weight TEXT, type TEXT, properties TEXT)']

    ]
    )
    .then(() =>console.log('tabela criada'))
    .catch( e => console.error('Erro ao criar a tabela',e));

 

  }

  // public insert(char:Character)
  // {
  //   return this.getDB()
  //   .then((db:SQLiteObject) =>
  // {
  //   let sql = 'insert into character (name,class,level) values (?,?,?)';
  //   let data = [char.name,char.class,char.level];

  //   return db.executeSql(sql,data)
  //   .catch((e) => console.error(e));
  // })
  // .catch((e) => console.error(e));
  // }

  public insertCharacter(char:Character)
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    let sql = 'insert into characters (name,class,race,level,alignment,experience,hp,hp_max,ac,strength,dexterity,constitution,inteligence,wisdom,charisma,lore,background,visual,img_url,inventory_id,grimoire_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    let data= [char.name,char.class,char.race,char.level,char.alignment,char.experience,char.hp,char.hp_max,char.ac,char.strength,char.dexterity,char.constitution,char.inteligence,char.wisdom,char.charisma,char.lore,char.background,char.visual,char.img_url,char.inventory_id,char.grimoire_id];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
    
  })
  .catch((e)=> console.error(e));
  }

  public insertItem(item:Item)
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    let sql = 'insert into character (name,value,function,description,weight,type,properties) values (?,?,?,?,?,?,?)';
    let data = [item.name,item.value,item.function,item.description,item.weight,item.type,item.properties];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));
  }


  
// public update(char:Character)
// {
//   return this.getDB()
//   .then((db:SQLiteObject) =>
// {
//   let sql = 'update character set name =?, class=?,level=? where id=?';
//   let data = [char.name,char.class,char.level,char.id];

//   return db.executeSql(sql,data)
//   .catch((e) => console.error(e));
// })
// .catch((e) => console.error(e));
// }

public updateCharacter(char:Character)
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    let sql = 'update characters set name=?,class=?,race =?,level=?,alignment=?,experience=?,hp=?,hp_max=?,ac=?,strength=?,dexterity=?,constitution=?,inteligence=?,wisdom=?,charisma=?,lore=?,background=?,visual=?,img_url=?,inventory_id=?,grimoire_id=? where id=?'
    let data= [char.name,char.class,char.race,char.level,char.alignment,char.experience,char.hp,char.hp_max,char.ac,char.strength,char.dexterity,char.constitution,char.inteligence,char.wisdom,char.charisma,char.lore,char.background,char.visual,char.img_url,char.inventory_id,char.grimoire_id,char.id];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
    
  })
  .catch((e)=> console.error(e));

  }

  public updateItem(item:Item)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'update items set name =?, value =?, function=?, description =?, weight=?, type=?, properties = ? where id=?';
  let data = [item.name,item.value,item.function,item.description,item.weight,item.type,item.properties,item.id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}


  
// public remove(id:number)
// {
//   return this.getDB()
//   .then((db:SQLiteObject) =>
// {
//   let sql = 'delete from character where id=?';
//   let data = [id];

//   return db.executeSql(sql,data)
//   .catch((e) => console.error(e));
// })
// .catch((e) => console.error(e));
// }

public removeCharacter(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'delete from characters where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public removeItem(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'delete from items where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

// public get(id:number)
// {
//   return this.getDB()
//   .then((db:SQLiteObject) =>
// {
//   let sql = 'select * from character where id=?';
//   let data = [id];

//   return db.executeSql(sql,data)
//   .then((data:any) => 
// {
//   if(data.rows.length > 0)
//  { 
//    let item = data.rows.item(0);
//    let character = new Character(item.name,item.class,item.level,item.id);

//    return character;
//  }

//  return null;
// })
//   .catch((e) => console.error(e));
// })
// .catch((e) => console.error(e));
// }

public getCharacter(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from characters where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .then((data:any) => 
{
  if(data.rows.length > 0)
 { 
   let item = data.rows.item(0);
   let character = new Character(item.name,item.class,item.race,item.level,item.id,item.alignment,item.experience,item.hp,item.hp_max,item.ac,item.strength,item.dexterity,item.constitution,item.inteligence,item.wisdom,item.charisma,item.lore,item.background,item.visual,item.img_url,item.inventory_id,item.grimoire_id);

   return character;
 }

 return null;
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));

}

public getItem(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from items where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .then((data:any) => 
{
  if(data.rows.length > 0)
 { 
   let item = data.rows.item(0);
   let character = new Character(item.name,item.class,item.level,item.id);

   return character;
 }

 return null;
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

// public getAll(name:string = null)
// {
//   return this.getDB()
//   .then((db:SQLiteObject) =>
// {
//   let sql = 'select * from character';
//   let data:any = [];

//   if(name)
//   {
//     sql += 'and name like ?';
//     data.push('%'+name+'%');
//   }

//   return db.executeSql(sql,data)
//   .then((data:any) => 
// {
//   if(data.rows.length > 0)
//  { 
//    let characters :any[] = [];
   

//    for(var i = 0; i<data.rows.length;i++)
//    {
//      var char = data.rows.item(i);
//      characters.push(char);
//    }
//    return characters;

//  }
//  else
//  return [];
// })
//   .catch((e) => console.error(e));
// })
// .catch((e) => console.error(e));
// }

public getAllCharacters(name:string = null)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from characters';
  let data:any = [];

  if(name)
  {
    sql += 'and name like ?';
    data.push('%'+name+'%');
  }

  return db.executeSql(sql,data)
  .then((data:any) => 
{
  if(data.rows.length > 0)
 { 
   let characters :any[] = [];
   

   for(var i = 0; i<data.rows.length;i++)
   {
     var char = data.rows.item(i);
     characters.push(char);
   }
   return characters;

 }
 else
 return [];
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}


}


