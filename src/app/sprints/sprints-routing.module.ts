import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { ListSprintComponent } from './list-sprint/list-sprint.component';
import { UpdateSprintComponent } from './update-sprint/update-sprint.component';

const routes: Routes = [
  { path: "add" , component: AddSprintComponent },
  { path: "list" , component: ListSprintComponent },
  { path: "update/:id" , component: UpdateSprintComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintsRoutingModule { }
