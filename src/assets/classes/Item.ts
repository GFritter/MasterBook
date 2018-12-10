
//estrutura de dado que define o item, recebido e enviado pra base de dados indivudualmente

export class Item 
{

    value:string;
    name:string;
    function:string;

    description:string; 
    weight:string;


    type:string;
    properties:string;


    id:number;

    constructor(name='',value='',func='',description='',weight='',type='',properties='',id?:number)
    {
        this.name=name;
        this.value=value;
        this.function=func;
        this.description=description;
        this.weight=weight;
        this.type=type;
        this.properties=properties;

        if(id)
        this.id=id;

    }




}