import { Component } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from './shared/mocks/mock';
import { Course } from './shared/interfaces/course';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';

  isLoggedIn: boolean = false;
 
  logTheUser() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  coursesList: Course[] = mockedCoursesList;
}


