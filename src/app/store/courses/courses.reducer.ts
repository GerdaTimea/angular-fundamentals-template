import { Course } from '@app/shared/models/course.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    allCourses: Course[];
    course: Course | null;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

export const initialState: CoursesState = {
    allCourses: [],
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
};

export const coursesReducer = createReducer( initialState, 
    on(CoursesActions.requestAllCourses, (state) => ( { ...state, isAllCoursesLoading: true } )),
    on(CoursesActions.requestAllCoursesSuccess, (state, { courses }) => ( { ...state, allCourses: courses, isAllCoursesLoading: false } )),
    on(CoursesActions.requestAllCoursesFail, (state, { error }) => ( { ...state, isAllCoursesLoading: false, errorMessage: error } )),

    on(CoursesActions.requestSingleCourse, (state, { id }) => ( { ...state, isSingleCourseLoading: true } )),
    on(CoursesActions.requestSingleCourseSuccess, (state, { course }) => ( { ...state, course: course, isSingleCourseLoading: false } )),
    on(CoursesActions.requestSingleCourseFail, (state, { error }) => ( { ...state, isSingleCourseLoading: false, errorMessage: error } )),

    on(CoursesActions.requestFilteredCourses, (state, { title }) => ( { ...state, isSearchState: true } )),
    on(CoursesActions.requestFilteredCoursesSuccess, (state, { courses }) => ( { ...state, allCourses: courses, isSearchState: false } )),
    on(CoursesActions.requestFilteredCoursesFail, (state, { error }) => ( { ...state, isSearchState: false, errorMessage: error } )),

    on(CoursesActions.requestDeleteCourse, (state, { id }) => ( { ...state, isAllCoursesLoading: true } )),
    on(CoursesActions.requestDeleteCourseSuccess, (state) => ( { ...state, isAllCoursesLoading: false } )),
    on(CoursesActions.requestDeleteCourseFail, (state, { error }) => ( { ...state, isAllCoursesLoading: false, errorMessage: error } )),
    
    on(CoursesActions.requestEditCourse, (state, { id, course }) => ( { ...state, isSingleCourseLoading: true } )),
    on(CoursesActions.requestEditCourseSuccess, (state, { course }) => ( { ...state, course: course, isSingleCourseLoading: false } )),
    on(CoursesActions.requestEditCourseFail, (state, { error }) => ( { ...state, isSingleCourseLoading: false, errorMessage: error } )),

    on(CoursesActions.requestCreateCourse, (state, { course }) => ( { ...state, isSingleCourseLoading: true } )),
    on(CoursesActions.requestCreateCourseSuccess, (state, { course }) => ( { ...state, allCourses: [...state.allCourses, course], isSingleCourseLoading: false } )),
    on(CoursesActions.requestCreateCourseFail, (state, { error }) => ( { ...state, isSingleCourseLoading: false, errorMessage: error } )),
);

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
