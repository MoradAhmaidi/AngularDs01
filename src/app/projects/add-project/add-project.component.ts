import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Service/project.service';
import { Projet } from '../Models/projet';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent{
  projet:Projet;

  constructor(private service:ProjectService, private router:Router)
  {
    this.projet=new Projet();
  }

  add(){
    this.service.add(this.projet).subscribe({
      next : () =>{
        this.router.navigateByUrl("/projects")
      },
    })
  }
}
