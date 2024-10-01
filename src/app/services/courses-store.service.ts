import { Injectable } from '@angular/core';
import { Course } from '@app/shared/models/course.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesStoreService {

    private isLoading$$ = new BehaviorSubject<boolean>(false);
    private courses$$ = new BehaviorSubject<Course[]>([] as Course[]);

    public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();
    public courses$: Observable<Course[]> = this.courses$$.asObservable();

    constructor(private coursesService: CoursesService) {}

    getAll(){
        this.coursesService.getAll().subscribe({
            next: (response) => this.courses$$.next(response.result),
            error: () => this.isLoading$$.next(false)
        });
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    getCourse(id: string): Observable<Course> {
        return this.coursesService.getCourse(id);
    }

    editCourse(id: string, course: Course) { 
        return this.coursesService.editCourse(id, course);
    }

    deleteCourse(id: string) {
        return this.coursesService.deleteCourse(id);
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        return this.coursesService.getAllAuthors();
    }

    createAuthor(name: string) {
        return this.coursesService.createAuthor(name);
    }

    getAuthorById(id: string) {
        return this.coursesService.getAuthorById(id);
    }
}
