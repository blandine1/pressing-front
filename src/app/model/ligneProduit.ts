import {Service} from "./Service";
import {Client} from "./Client";

export class LigneProduit{
    id:number;
    prix: number;
    quantite: number;
    description : string;
    vetement:string;
    service:any;
    prixTotalPartiel:number;
    status:boolean;
   lastUpdatedDate : Date;
}
