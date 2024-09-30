import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockedCoursesList } from '@app/shared/mocks/mock';
import { Course } from '@app/shared/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  coursesList: Course[] = mockedCoursesList;
  
  selectedCourse?: Course;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() { 
    const courseId = this.route.snapshot.paramMap.get('id');  
    if (courseId) {
      this.selectedCourse = this.coursesList.find((element) => element.id === courseId);
    }
  }

  showCourseInfo(course: Course): void {
    this.selectedCourse = course;
  }

  hideCourseInfo(): void {
    this.selectedCourse = undefined;
  }
}
