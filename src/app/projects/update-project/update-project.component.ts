import { Component, OnInit } from '@angular/core';
import { Projet } from '../Models/projet';
import { ProjectService } from '../Service/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  projet:Projet;
  
  constructor(private active:ActivatedRoute,private service:ProjectService,private router:Router)
  {
    this.projet=new Projet();
  }

  ngOnInit(): void {
    let id=this.active.snapshot.params["id"];
    this.service.getById(id)
    .pipe(
      map(p=>{
        p.DateDebut=p.DateDebut.toString().split("T")[0];
        p.DateFin=p.DateFin.toString().split("T")[0];
        return p;
      })
    )
    .subscribe({
      next : (data) => {
        this.projet=data;
        console.log(this.projet);
      },
    }); 
    
  }

  update(){
    this.service.update(this.projet).subscribe({
      next : () => {this.router.navigateByUrl("/projects")},
    })
  }

}
