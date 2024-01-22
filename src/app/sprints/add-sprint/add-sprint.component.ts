import { Component, OnInit } from '@angular/core';
import { Sprint } from '../Models/sprint';
import { SprintService } from '../Service/sprint.service';
import { Route, Router } from '@angular/router';
import { ProjectService } from 'src/app/projects/Service/project.service';
import { Projet } from 'src/app/projects/Models/projet';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})
export class AddSprintComponent implements OnInit{
  sprint:Sprint;
  projets:Projet[];

  constructor(private service:SprintService,private serviceProjet:ProjectService,private router:Router){
    this.sprint=new Sprint();
    this.projets=[];
  }

  ngOnInit(): void {
    this.serviceProjet.getAll().subscribe(
      (data) => {
        this.projets=data;
      }
    )
  }
  add(){
    this.sprint.Projet = this.projets.find(project => project.Id == this.sprint.ProjetId)
    this.service.add(this.sprint).subscribe({
      next : () => {
        this.router.navigateByUrl("/sprints/list")}
    })
  }

}
