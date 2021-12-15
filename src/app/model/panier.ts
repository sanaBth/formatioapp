export class Panier {
    iduser : string;
    idformation : [];
    sommetotal : number;
    constructor(iduser :string, sommetotal :number,  idformation :[])
    {
        this.iduser=iduser;
        this.sommetotal=sommetotal;
        this.idformation=idformation;
    }
}
