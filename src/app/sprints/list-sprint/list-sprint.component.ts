import { Component, OnInit } from '@angular/core';
import { Sprint } from '../Models/sprint';
import { SprintService } from '../Service/sprint.service';

@Component({
  selector: 'app-list-sprint',
  templateUrl: './list-sprint.component.html',
  styleUrls: ['./list-sprint.component.css']
})
export class ListSprintComponent implements OnInit {
  
  sprints:Sprint[];
  constructor(private service:SprintService){
    this.sprints=[];
  }
  ngOnInit(): void {
    this.service.getAll().subscribe({
      next : (data) => {this.sprints=data}
      
    })
  }
  remove(id:number){
    if(confirm("Etre vous sur de vouloir supprimer le Sprint !"))
    {
      this.service.remove(id).subscribe({
        next : () => { 
          this.sprints = this.sprints.filter(s=>s.Id!=id)
        },
      });
    }
  }

}
