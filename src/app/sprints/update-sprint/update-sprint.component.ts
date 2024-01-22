import { Component, OnInit } from '@angular/core';
import { Sprint } from '../Models/sprint';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintService } from '../Service/sprint.service';
import { map, throttleTime } from 'rxjs';
import { Projet } from 'src/app/projects/Models/projet';
import { ProjectService } from 'src/app/projects/Service/project.service';

@Component({
  selector: 'app-update-sprint',
  templateUrl: './update-sprint.component.html',
  styleUrls: ['./update-sprint.component.css']
})
export class UpdateSprintComponent implements OnInit {
  sprint:Sprint;
  projets:Projet[];

  constructor(private active:ActivatedRoute,private service:SprintService,private serviceProjet:ProjectService,private router:Router){
    this.sprint=new Sprint();
    this.projets=[];
  }

  ngOnInit(): void {
    let id=this.active.snapshot.params["id"];
    this.service.getById(id)
    .pipe(
      map(p=>{
        p.Id=p.Id
        p.DateDebut=p.DateDebut.toString().split("T")[0];
        p.DateFin=p.DateFin.toString().split("T")[0];
        p.ProjetId=p.ProjetId
        return p;
      })
    )
    .subscribe({
      next : (data) => {
        this.sprint=data;
      },
    }); 

    this.serviceProjet.getAll().subscribe(
      (data) => {
        this.projets=data;
      }
    )
  }

  update(){
    this.sprint.Projet = this.projets.find(project => project.Id == this.sprint.ProjetId)
    this.service.update(this.sprint).subscribe({
      next : () => {this.router.navigateByUrl("/sprints/list")}
    });
  }
}
