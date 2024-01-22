import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SprintsRoutingModule } from './sprints-routing.module';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { ListSprintComponent } from './list-sprint/list-sprint.component';
import { UpdateSprintComponent } from './update-sprint/update-sprint.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSprintComponent,
    ListSprintComponent,
    UpdateSprintComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    SprintsRoutingModule
  ]
})
export class SprintsModule { }
