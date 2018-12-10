export class Note
{
    title:string;
    description:string;
    content:string;

    id:number;

    constructor(title:string = '',description:string='',content:string='',id?:number)
    {
        this.title = title;
        this.description=description;
        this.content=content;

        if(id)
        this.id=id;
    }


}