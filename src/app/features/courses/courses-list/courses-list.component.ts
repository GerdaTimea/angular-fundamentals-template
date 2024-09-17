import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/shared/interfaces/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses!: Course[];
  @Input() editable: boolean = true;

  @Output() showCourse = new EventEmitter();
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();
}
