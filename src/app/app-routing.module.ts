import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "sprints" , loadChildren : () =>  import ("./sprints/sprints.module").then(s => s.SprintsModule)},
  { path: "projects" , loadChildren : () =>  import ("./projects/projects.module").then(m => m.ProjectsModule)},
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
