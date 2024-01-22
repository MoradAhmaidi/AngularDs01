import { Projet } from "src/app/projects/Models/projet";

export class Sprint {
    Id:number = 0;
    SprintName:string = "";
    SprintGoal:string = "";
    ProjetId:number=0;
    Projet?:Projet;
    DateDebut!:Date | string;
    DateFin!:Date | string;
}
