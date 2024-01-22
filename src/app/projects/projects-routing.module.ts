import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ListProjectComponent } from './list-project/list-project.component';

const routes: Routes = [
  { path: "add" , component: AddProjectComponent },
  { path: "" , component: ListProjectComponent },
  { path: "update/:id" , component: UpdateProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
