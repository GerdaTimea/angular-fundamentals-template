import { ChangeDetectionStrategy, Component } from "@angular/core";
import { mockedAuthorsList, mockedCoursesList } from "./shared/mocks/mock";
import { Course } from "./shared/models/course.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "courses-app";

  isLoggedIn: boolean = false;

  logTheUser() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  courseCardData: Course = mockedCoursesList[0];
  coursesList: Course[] = mockedCoursesList;
}
