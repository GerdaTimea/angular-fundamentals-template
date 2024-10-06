import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseInfoComponent } from '../course-info/course-info.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent
      },
      {
        path: ':id',
        component: CourseInfoComponent
      }
    ]
  }
]

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
