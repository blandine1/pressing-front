import {LigneProduit} from "./ligneProduit";
import {Client} from "./Client";
export class Produit{
   id:number;
   client : Client;
   status : boolean;
   description : string;
   creationDate:Date;
   lastUpdatedDate:Date;
   prixTotal:number;
   listeLigneProduit:any;
}
