import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent, LoginFormComponent, RegistrationFormComponent } from './shared/components';
import { CoursesComponent } from './features/courses/courses.component';
import { CourseInfoComponent } from './features/course-info/course-info.component';
import { AdminGuard } from './user/guards/admin.guard';

export const routes: Routes = [
    {
        path: 'login',
        //component: LoginFormComponent
        loadChildren: () => import('src/app/shared/components/login-form/login-form.module').then(m => m.LoginFormModule)
    },
    {
        path: 'registration',
        //component: RegistrationFormComponent
        loadChildren: () => import('src/app/shared/components/registration-form/registration-form.module').then(m => m.RegistrationFormModule)
    },    
    {
        path: 'courses',
        //component: CoursesComponent
        loadChildren: () => import('src/app/features/courses/courses.module').then(m => m.CoursesModule)
    }, 
    {
        path: 'courses/add',
        component: CourseFormComponent,
        //loadComponent: () => import('src/app/shared/components/course-form/course-form.component').then(c => c.CourseFormComponent)
        canActivate: [AdminGuard]
    },
    {
        path: 'courses/edit/:id',
        component: CourseFormComponent,
        //loadComponent: () => import('src/app/shared/components/course-form/course-form.component').then(c => c.CourseFormComponent)
        canActivate: [AdminGuard]
    },
    {
        path: 'courses/:id',
        component: CoursesComponent
        //loadComponent: () => import('src/app/shared/components/course-form/course-form.component').then(c => c.CourseFormComponent)
    },
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: CoursesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }