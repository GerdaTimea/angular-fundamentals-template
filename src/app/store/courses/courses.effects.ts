import { Injectable } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CoursesActions from './courses.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { CoursesStateFacade } from './courses.facade';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private coursesStateFacade: CoursesStateFacade,
        private router: Router
    ) {}

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestAllCourses),
        mergeMap(() => this.coursesService.getAll().pipe(
            map(response => {
                if (response.successful) { 
                    console.log("CoursesEffects/getAll > requestAllCoursesSuccess");
                    console.log(response.result);
                    return CoursesActions.requestAllCoursesSuccess({ courses: response.result });
                }
                return CoursesActions.requestAllCoursesFail({ error: 'this.coursesService.getAll() failed' });
            } ),
            catchError(() => of( CoursesActions.requestAllCoursesFail({ error: 'this.coursesService.getAll() failed' }) ))
        ))
    ));

    filteredCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestFilteredCourses),
        mergeMap((title) => this.coursesStateFacade.allCourses$.pipe(
            map(courses => {
                const filteredCourses = courses.filter(course => course.title);
                return CoursesActions.requestAllCoursesSuccess({ courses: filteredCourses });
            } ),
            catchError(() => of( CoursesActions.requestFilteredCoursesFail({ error: 'this.coursesService.getAll() failed' }) ))
        ))
    ));

    getSpecificCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestSingleCourse),
        mergeMap((action) => this.coursesService.getCourse(action.id).pipe(
            map(course => CoursesActions.requestSingleCourseSuccess({ course })),
            catchError(() => of( CoursesActions.requestFilteredCoursesFail({ error: 'this.coursesService.getAll() failed' }) ))
        ))
    ));

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestDeleteCourse),
        mergeMap((action) => this.coursesService.deleteCourse(action.id).pipe(
            map(() => CoursesActions.requestDeleteCourseSuccess()),
            catchError(() => of( CoursesActions.requestFilteredCoursesFail({ error: 'this.coursesService.getAll() failed' }) ))
        ))
    ));

    /*
    editCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestEditCourse),
        mergeMap((action) => this.coursesService.editCourse(action.id, action.course).pipe(
            map((course) => CoursesActions.requestEditCourseSuccess({ course })),
            catchError(() => of( CoursesActions.requestFilteredCoursesFail({ error: 'this.coursesService.getAll() failed' }) ))
        ))
    ));
    */

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestCreateCourse),
        mergeMap((action) => this.coursesService.createCourse(action.course).pipe(
            map((course) => CoursesActions.requestCreateCourseSuccess({ course })),
            catchError(() => of( CoursesActions.requestFilteredCoursesFail({ error: 'this.coursesService.getAll() failed' }) ))
        ))
    ));

    redirectToTheCoursesPage$ = createEffect(() => this.actions$.pipe(
        ofType(
            CoursesActions.requestCreateCourseSuccess,
            CoursesActions.requestEditCourseSuccess,
            CoursesActions.requestSingleCourseFail
        ),
        tap(() => this.router.navigate(['/courses']))
        ),
        { dispatch: false }
    );
}

