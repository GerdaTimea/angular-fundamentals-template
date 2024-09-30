import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder, FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mockedAuthorsList, mockedCoursesList } from '@app/shared/mocks/mock';
import { Course } from '@app/shared/models/course.model';
  
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export function authorsNameValidator(): ValidatorFn {  
  const regex = /^[A-Za-z0-9]+/;

  return (control: AbstractControl): ValidationErrors | null => {    
    const valid = regex.test(control.value);
    console.log("authorsNameValidatorFn: " + valid);
    if (valid) {
      return null;
    } else {
      return {invalidAuthorName: true};
    }  
  };
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent {
  courseForm!: FormGroup;
 
  isSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    public fb: FormBuilder, 
    public library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.courseForm = this.fb.group({
      title: ['', [ Validators.required, Validators.minLength(2) ]],
      description: ['', [ Validators.required, Validators.minLength(2) ]],
      author: ['', [ Validators.minLength(2), authorsNameValidator() ]],
      authors: this.fb.array([]),
      courseAuthors: this.fb.array([]),
      duration: ['', [ Validators.required, Validators.min(0) ]]
    });    
  }

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id'); 
    let selectedCourse = mockedCoursesList.find((element) => element.id === courseId);
    if (selectedCourse) {      
      this.courseForm.controls['title'].setValue(selectedCourse.title);
      this.courseForm.controls['description'].setValue(selectedCourse.description);
      this.courseForm.controls['duration'].setValue(selectedCourse.duration);
      selectedCourse.authors.forEach(authorId => {
        let courseAuthor = this.fb.group({
          id: [authorId],
          name: [mockedAuthorsList.find((author) => author.id === authorId)?.name]
        });
        this.courseAuthors.push(courseAuthor);
      })
    }
  }

  get authors(): FormArray {
    return this.courseForm.controls['authors'] as FormArray;
  }

  get courseAuthors(): FormArray {
    return this.courseForm.controls['courseAuthors'] as FormArray;
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addAuthor() {
    let author = this.fb.group({
      id: [this.generateGUID()],
      name: [this.courseForm.controls['author'].value]
    });
    this.authors.push(author);
    this.courseForm.controls['author'].reset();
  }

  moveAuthorToCourse(index: number) {
    let courseAuthor = this.fb.group({
      id: [this.authors.at(index).value.id],
      name: [this.authors.at(index).value.name]
    });
    this.courseAuthors.push(courseAuthor);
    this.authors.removeAt(index);
  }

  removeAuthorFromCourse(index: number) {
    let author = this.fb.group({
      id: [this.courseAuthors.at(index).value.id],
      name: [this.courseAuthors.at(index).value.name]
    });
    this.authors.push(author);
    this.courseAuthors.removeAt(index);
  }
}
