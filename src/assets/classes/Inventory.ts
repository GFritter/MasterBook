import {Item} from '../classes/Item';

//estrutura que vai receber  os itens do inventario da database

export class Inventory
{

    items:Item[];

    id:number;
    owner:string;

    userId:number;

}