import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '@app/shared/interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  
  @Input() courseCardData!: Course;

  convertDuration(duration: number): string {
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    return `${hours}:${minutes} hours`;
  }

  @Input() editable: boolean = true;

  @Output() clickOnShow = new EventEmitter();

  showCourse() {
    this.clickOnShow.emit();
  }
}
 
