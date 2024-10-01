import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author, Course, GetAllCoursesResponse } from '@app/shared/models/course.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<GetAllCoursesResponse> {
        return this.http.get<GetAllCoursesResponse>('http://localhost:4000/courses/all');
    }

    createCourse(course: Course) { 
        return this.http.post<Course>('http://localhost:4000/courses/add', course);
    }

    editCourse(id: string, course: Course) { 
        return this.http.put(`http://localhost:4000/courses/${id}`, course);
    }

    getCourse(id: string) {
        return this.http.get<Course>(`http://localhost:4000/courses/${id}`);
    }

    deleteCourse(id: string) {
        return this.http.delete(`http://localhost:4000/courses/${id}`);
    }

    filterCourses(value: string) {
        return this.http.get('http://localhost:4000/courses/filter');
    }

    getAllAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>('http://localhost:4000/authors/all');
    }

    createAuthor(name: string) {
        return this.http.post('http://localhost:4000/authors/add', name);
    }

    getAuthorById(id: string) {
        return this.http.get(`http://localhost:4000/authors/${id}`);
    }
}
