import { Component } from '@angular/core';
import { mockedCoursesList } from '@app/shared/mocks/mock';
import { Course } from '@app/shared/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  coursesList: Course[] = mockedCoursesList;

  selectedCourse?: Course;

  showCourseInfo(course: Course): void {
    this.selectedCourse = course;
  }

  hideCourseInfo(): void {
    this.selectedCourse = undefined;
  }
}
