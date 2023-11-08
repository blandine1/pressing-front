export interface Utilisateur {
  id: number;
  name: string;
  prenom: string;
  email: string;
  dateDeNaissance: Date;
  statut:boolean;
  creationDate: Date;
  lastUpdateDate: Date;
  password:string;
  role: number;
}
