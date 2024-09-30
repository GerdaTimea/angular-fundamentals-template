import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "courses-app";

  isLoggedIn: boolean = false;

  // courseCardData: Course = mockedCoursesList[0];
}
