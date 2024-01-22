import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';



@NgModule({
  declarations: [
    AddProjectComponent,
    ListProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ProjectsRoutingModule
  ]

})
export class ProjectsModule { }
