import { Component, OnInit } from '@angular/core';
import { Projet } from '../Models/projet';
import { ProjectService } from '../Service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projets:Projet[];

  constructor(private service:ProjectService){
    this.projets=[];
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next : (data) =>{this.projets = data},
    });
  }

  remove(id:number){
    if(confirm("Etre vous sur de vouloir supprimer le projet !"))
    {
      this.service.remove(id).subscribe({
        next : () =>{
          this.projets = this.projets.filter(p=>p.Id!=id)
        },
      })

    }
  }

}
