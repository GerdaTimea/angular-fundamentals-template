import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [ 
  { 
    path: 'courses', 
    component: CoursesComponent 
  } 
];

@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    CoursesListComponent,
    RouterModule
  ]
})
export class CoursesModule { }
