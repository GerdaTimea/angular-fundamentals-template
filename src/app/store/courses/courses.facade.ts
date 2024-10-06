import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import * as CoursesSelectors from './courses.selectors';
import { Course } from '@app/shared/models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesStateFacade {

    isAllCoursesLoading$ = this.store.pipe(select(CoursesSelectors.isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(CoursesSelectors.isSingleCourseLoadingSelector)); 
    isSearchingState$ = this.store.pipe(select(CoursesSelectors.isSearchingStateSelector));
    courses$ = this.store.pipe(select(CoursesSelectors.getCourses));
    allCourses$ = this.store.pipe(select(CoursesSelectors.getAllCourses));
    course$ = this.store.pipe(select(CoursesSelectors.getCourse));
    errorMessage$ = this.store.pipe(select(CoursesSelectors.getErrorMessage));

    constructor(private store: Store) {} 
    
    getAllCourses() {
        this.store.dispatch(CoursesActions.requestAllCourses());
    }

    getSingleCourse(id: string) {
        this.store.dispatch(CoursesActions.requestSingleCourse({ id }));
    }

    getFilteredCourses(searchValue: string) {
        this.store.dispatch(CoursesActions.requestFilteredCourses({ title: searchValue }));
    }

    editCourse(body: Course, id: string) {
        this.store.dispatch(CoursesActions.requestEditCourse({ course: body, id }));
    }

    createCourse(body: Course) {
        this.store.dispatch(CoursesActions.requestCreateCourse({ course: body }));
    }

    deleteCourse(id: string) {
        this.store.dispatch(CoursesActions.requestDeleteCourse({ id }));
    }
}
