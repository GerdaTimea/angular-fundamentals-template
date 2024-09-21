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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() courseCardData!: Course;
  @Input() editable: boolean = true;

  @Output() clickOnShow = new EventEmitter<void>();

  showCourse(): void {
    this.clickOnShow.emit();
  }
}
