export class attack
{
    source:string;
    damage:string;

}


export class Character
{

    //general attributes
    name:string;
    class:string;
    race:string;
    level:string;
    alignment:string;
    id:number

    experience:number;


    //stats
    hp:number;
    hp_max:number;
    ac:number;
    strength:number;
    dexterity:number;
    constitution:number;
    inteligence:number;
    wisdom:number;
    charisma:number;

    //mods
    str_mod:number;
    dex_mod:number;
    con_mod:number;
    int_mod:number;
    wis_mod:number;
    cha_mod:number;

    hit_dice:number;


    //external objects
    inventory:any;
    inventory_id:number;
    grimoire:any;
    grimoire_id:number;
    perks:any;
    proficiencies:any;

    //text shit
    lore:string;
    background:string;
    visual:string;
    img_url:string;





    

    //constructor
    constructor(n:string = '',c:string='', race='',l:string='',i?:number,alignment:string = '',experience:number = 0,
                hp=0,hp_max=0,ac=0,str=0,dex=0,con=0,int=0,wis=0,cha=0,inventory_id?:number, grimoire_id?:number,
                lore:string = '',background:string = '',visual:string = '', img_url?:string)
    {
        this.name=n;
        this.class=c;
        this.race=race;
        this.level=l;
        this.id = i;
        this.alignment = alignment;
        this.experience=experience;
        this.hp=hp;
        this.hp_max=hp_max;
        this.ac=ac;
        this.strength=str;
        this.dexterity=dex;
        this.constitution=con;
        this.inteligence=int;
        this.wisdom=wis;
        this.charisma=cha;
        this.inventory_id=inventory_id;
        this.grimoire_id=grimoire_id;
        this.lore=lore;
        this.background=background;
        this.visual=visual;
        this.img_url=img_url;

        //gerar modificadores;

        this.str_mod =Math.trunc((str-10)/2);
        this.dex_mod =Math.trunc((dex-10)/2);
        this.con_mod =Math.trunc((con-10)/2);
        this.int_mod =Math.trunc((int-10)/2);
        this.wis_mod =Math.trunc((wis-10)/2);
        this.cha_mod =Math.trunc((cha-10)/2);


        //carregar inventario



        //carregar grimorio




        //carregar ataques 


    }

 
}