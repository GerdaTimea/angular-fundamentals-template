import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '@app/shared/models/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInfoComponent {
  @Input() course!: Course;
}