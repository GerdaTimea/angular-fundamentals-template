import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

export const selectCoursesState = createFeatureSelector<CoursesState>('coursesState');

export const isAllCoursesLoadingSelector = createSelector( selectCoursesState, (state: CoursesState) => state.isAllCoursesLoading );
export const isSingleCourseLoadingSelector = createSelector( selectCoursesState, (state: CoursesState) => state.isSingleCourseLoading );
export const isSearchingStateSelector = createSelector( selectCoursesState, (state: CoursesState) => state.isSearchState );
export const getCourses = createSelector( selectCoursesState, (state: CoursesState) => state.allCourses );
export const getAllCourses = createSelector( selectCoursesState, (state: CoursesState) => state.allCourses );
export const getCourse = createSelector( selectCoursesState, (state: CoursesState) => state.course );
export const getErrorMessage = createSelector( selectCoursesState, (state: CoursesState) => state.errorMessage );
