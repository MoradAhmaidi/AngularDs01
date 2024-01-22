import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
