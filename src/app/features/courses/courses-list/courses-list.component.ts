import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Course } from "@app/shared/models/course.model";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent {
  @Input() courses!: Course[];
  @Input() editable!: boolean;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();

  onShowCourse(course: Course): void {
    this.showCourse.emit(course);
  }

  onEditCourse(course: Course): void {
    this.editCourse.emit(course);
  }

  onDeleteCourse(course: Course): void {
    this.deleteCourse.emit(course);
  }
}
