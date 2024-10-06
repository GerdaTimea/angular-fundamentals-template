import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '@app/shared/models/course.model';
import { requestAllCourses } from '@app/store/courses/courses.actions';
import { CoursesState } from '@app/store/courses/courses.reducer';
import { getAllCourses } from '@app/store/courses/courses.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit{
  coursesList$?: Observable<Course[]> ;
  
  selectedCourse?: Course;

  constructor(private route: ActivatedRoute, private store: Store<CoursesState>  ) {
    this.store.dispatch(requestAllCourses());
  }

  ngOnInit() {
    this.coursesList$ = this.store.select(getAllCourses); 
    this.coursesList$.subscribe(courses => console.log("courses: " + courses));
  }
  
  showCourseInfo(course: Course): void {
    this.selectedCourse = course;
  }

  hideCourseInfo(): void {
    this.selectedCourse = undefined;
  }
}


/*  
Without NgRx:

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { mockedCoursesList } from '@app/shared/mocks/mock';
import { Course } from '@app/shared/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  coursesList: Course[] = [];
  
  selectedCourse?: Course;

  constructor(private route: ActivatedRoute, private coursesStoreService: CoursesStoreService) {}
  
  ngOnInit() {       
    this.coursesStoreService.getAll();
    this.coursesStoreService.courses$.subscribe({
      next: (resp) => { this.coursesList = (resp as Course[]); },
      error: (err) => { console.error('Error: ', err); }
    });
  }

  showCourseInfo(course: Course): void {
    this.selectedCourse = course;
  }

  hideCourseInfo(): void {
    this.selectedCourse = undefined;
  }
}
*/