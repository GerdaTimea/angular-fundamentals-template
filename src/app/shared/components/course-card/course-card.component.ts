import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Course } from "@app/shared/models/course.model";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
  @Input() courseCardData!: Course;
  @Input() editable!: boolean;

  @Output() clickOnShow = new EventEmitter<Course>();

  showCourse(): void {
    this.clickOnShow.emit(this.courseCardData);
  }
}
