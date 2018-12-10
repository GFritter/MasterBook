
import { Injectable } from '@angular/core';
import {SQLite,SQLiteObject} from '@ionic-native/sqlite'

import {Character} from '../../assets/classes/Character'
import { Item } from '../../assets/classes/Item';
import {Spell} from '../../assets/classes/Spell';
import { Monster } from '../../assets/classes/Monster';
import { Note } from '../../assets/classes/Note';

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

  //abre (ou cria caso nao exista) a base de dados
  public getDB()
  {
    return this.sqlite.create({
      name:'database.db',
      location:'default'
    });
  }

  //cria a base de dados chamando a fun;'ao de criar tabelas, outros processos pertinentes, como sync com servidor vai aqui
  public createDatabase()
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    this.createTable(db);

  })
  .catch(e=> console.log(e));
  }

  //cria (caso nao existam) as tabelas da base de dados
  private createTable (db:SQLiteObject)
  {
    db.sqlBatch([
    
      ['CREATE TABLE IF NOT EXISTS characters(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, class TEXT,race TEXT, level TEXT, alignment TEXT, experience INTEGER, hp INTEGER,hp_max INTEGER,ac NUMBER, strength NUMBER, dexterity NUMBER, constitution NUMBER, inteligence NUMBER, wisdom NUMBER, charisma NUMBER,lore TEXT, background TEXT, visual TEXT, img_url TEXT,inventory_id NUMBER, grimoire_id NUMBER)'],
      ['CREATE TABLE IF NOT EXISTS spells(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT,type TEXT, level NUMBER, casting TEXT, range TEXT, components TEXT, duration TEXT, description TEXT )'],
      ['CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, value TEXT, function TEXT, description TEXT, weight TEXT, type TEXT, properties TEXT)'],
      ['CREATE TABLE IF NOT EXISTS monsters(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT, size TEXT, type TEXT, alignment TEXT, cr INTEGER, legendary BIT, ac INTEGER, hp INTEGER, hp_max INTEGER, strength INTEGER, dexterity INTEGER, constitution INTEGER, wisdom INTEGER, inteligence INTEGER, charisma INTEGER, skills TEXT, senses TEXT, languages TEXT, perks TEXT, actions TEXT, legendaryActions TEXT, biome TEXT)'],
      ['CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title TEXT, description TEXT, content TEXT)']
    ]
    )
    .then(() =>console.log('tabela criada'))
    .catch( e => console.error('Erro ao criar a tabela',e));

 

  }

 /*funcoes de inserir na base de dados*/

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
    let sql = 'insert into items (name,value,function,description,weight,type,properties) values (?,?,?,?,?,?,?)';
    let data = [item.name,item.value,item.function,item.description,item.weight,item.type,item.properties];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));
  }

  public insertSpell(spell:Spell)
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    let sql = 'insert into spells (name,type,level,casting_time,range,components,duration,description) values (?,?,?,?,?,?,?,?)';
    let data = [spell.name,spell.type,spell.level,spell.casting_time,spell.range,spell.components,spell.duration,spell.description];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));
  }

  
  public insertMonster(monst:Monster)
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    let sql = 'insert into monsters (name,size,type,alignment,cr,legendary,ac,hp,hp_max,strength,dexterity,constitution,wisdom,inteligence,charisma,skills,senses,languages,perks,actions,legendaryActions,biome) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    let data= [monst.name,monst.size,monst.type,monst.alignment,monst.cr,,monst.legendary,monst.ac,monst.hp,monst.hpMax,monst.strength,monst.dexterity,monst.constitution,monst.wisdom,monst.inteligence,monst.charisma,monst.skills,monst.senses,monst.languages,monst.perks,monst.actions,monst.legendaryActions,monst.biome];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
    
  })
  .catch((e)=> console.error(e));
  }


  public insertNote(note:Note)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'insert into notes (title,description,content) values (?,?,?)';
  let data = [note.title,note.description,note.content];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

  
/*fun'oes de atualizar a base de dados*/

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

public updateSpell(spell:Spell)
  {
    return this.getDB()
    .then((db:SQLiteObject) =>
  {
    let sql = 'update spells set name=?,type=?,level=?,casting_time=?,range=?,components=?,duration=?,description=? where id=?) ';
    let data = [spell.name,spell.type,spell.level,spell.casting_time,spell.range,spell.components,spell.duration,spell.description,spell.id];

    return db.executeSql(sql,data)
    .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));
  }


  public updateNote(note:Note)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'update notes set title =?, description=?,content=? where id=?';
  let data = [note.title,note.description,note.content,note.id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}
  
  /*fun;oes de remover da base de dados*/

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

public removeSpell(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'delete from spells where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}


public removeMonster(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'delete from monsters where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}


public removeNotes(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'delete from notes where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

/*fun;oes de pegar(individualmente por id) da base de dados*/

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
   let object = new Item(item.name,item.value,item.function,item.description,item.weight,item.type,item.properties,item.id);

   return object;
 }

 return null;
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public getSpell(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from spells where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .then((data:any) => 
{
  if(data.rows.length > 0)
 { 
   let item = data.rows.item(0);
   let spell = new Spell(item.name,item.type,item.level,item.casting_time,item.range,item.components,item.duration,item.description,item.id);
   return spell;
 }

 return null;
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public getMonster(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from monsters where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .then((data:any) => 
{
  if(data.rows.length > 0)
 { 
   let item = data.rows.item(0);
   let monster = new Monster(item.name,item.size,item.type,item.alignment,item.cr,item.legendary,item.ac,item.hp,item.hpMax,item.strength,item.dexterity,item.constitution,item.inteligence,item.wisdom,item.charisma,item.skills,item.senses,item.languages,item.perks,item.actions,item.legendaryActions,item.biome,item.id);

   return monster;
 }

 return null;
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public getNote(id:number)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from notes where id=?';
  let data = [id];

  return db.executeSql(sql,data)
  .then((data:any) => 
{
  if(data.rows.length > 0)
 { 
   let item = data.rows.item(0);
   let note = new Note(item.title,item.description,item.content,item.id);
   return note;
 }

 return null;
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

/* fun;'oes para pegar todos os items (permite pesquisa por nome)*/

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

public getAllItems(name:string = null)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from items';
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
   let items :any[] = [];
   

   for(var i = 0; i<data.rows.length;i++)
   {
     var item = data.rows.item(i);
     items.push(item);
   }
   return items;

 }
 else
 return [];
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public getAllSpells(name:string = null)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from spells';
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
   let spells :any[] = [];
   

   for(var i = 0; i<data.rows.length;i++)
   {
     var spell = data.rows.item(i);
     spells.push(spell);
   }
   return spells;


 }
 else
 return [];
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public getAllMonsters(name:string = null)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from monsters';
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
   let monsters :any[] = [];
   

   for(var i = 0; i<data.rows.length;i++)
   {
     var monst = data.rows.item(i);
     monsters.push(monst);
   }
   return monsters;

 }
 else
 return [];
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}

public getAllNotes(name:string = null)
{
  return this.getDB()
  .then((db:SQLiteObject) =>
{
  let sql = 'select * from notes';
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
   let notes :any[] = [];
   

   for(var i = 0; i<data.rows.length;i++)
   {
     var note = data.rows.item(i);
     notes.push(note);
   }
   return notes;

 }
 else
 return [];
})
  .catch((e) => console.error(e));
})
.catch((e) => console.error(e));
}


}


