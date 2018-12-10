import { DomSanitizerImpl } from "../../../node_modules/@angular/platform-browser/src/security/dom_sanitization_service";

//estrutura que define o monstro 

export class Monster 
{
    name:string;
    size:string;
    type:string;
    alignment:string;
    cr:number;

    legendary:boolean;

    ac:number;
    hp:number;
    hpMax:number;

    strength:number;
    dexterity:number;
    constitution:number;
    inteligence:number;
    wisdom:number;
    charisma:number;

    skills:string;
    senses:string;
    languages:string;

    perks:string;
    actions:string;

    legendaryActions:string;

    image_url:string;
    biome:string;

    id:number;

    constructor(name:string='',size:string='',type:string='',alignment:string='',cr:number=0,legendary:boolean=false,ac:number=0,hp:number=0,hp_max:number=0,str:number=0,dex:number=0,con:number=0,int:number=0,wis:number=0,cha:number=0,skills:string='',senses:string='',languages:string='',perks:string='',actions:string='',legendaryActions:string='',biome:string='',id?:number)
    {
        this.name=name;
        this.size=size;
        this.type=type;
        this.alignment=alignment;
        this.cr=cr;
        this.legendary=legendary;
        this.ac=ac;
        this.hp=hp;
        this.hpMax=hp_max;
        this.strength=str;
        this.dexterity=dex;
        this.constitution=con;
        this.wisdom=wis;
        this.inteligence=int;
        this.charisma=cha;
        this.skills=skills;
        this.senses=senses;
        this.languages=languages;
        this.perks=perks;
        this.actions=actions;
        this.legendaryActions=legendaryActions;
        this.biome=biome;

        if(id)
        this.id=id;


    }
    








}