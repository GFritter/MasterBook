export class Spell
{
    name:string;
    type:string;
    level:number;

    casting_time:string;
    range:string;
    components:string;
    duration:string;

    description:string;

    id:number;

    constructor(name='',type='',level=0,castTime='',range='',comp='',duration='',desc='',id?:number)
    {
        this.name=name;
        this.type=type;
        this.level=level;
        this.casting_time=castTime;
        this.range=range;
        this.components=comp;
        this.duration=duration;
        this.description=desc;

        if(id)
        this.id=id;

    }
}