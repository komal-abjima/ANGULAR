export class BookDetails{
    public id: number;
    public name: string;
    public authorname: string;
    public price: number;


    constructor(id:number, name: string, authorname: string, price: number){
        this.id = id;
        this.name = name;
        this.authorname = authorname;
        this.price = price;
      

    }
}