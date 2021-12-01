export class Formation {
    nom:string;
    imagef:string;
    dure:string;
    nomformateur:string;
    description:string;
    notes:number;
    prix :number;
    listVideo :[]
    constructor(nom :string,imagef : string,dure:string,nomformateur:string,description:string,notes:number,
        prix :number,  listVideo :[])
    {
        this.nom=nom;
        this.imagef=imagef;
        this.dure=dure;
        this.nomformateur=nomformateur;
        this.description=description;
        this.notes=notes;

this.prix=prix;
this.listVideo=listVideo;

        
    }
}