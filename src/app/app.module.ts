import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from '@app/app.component';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { CoursesService } from '@app/services/courses.service';
import { CoursesComponent } from './features/courses/courses.component';
import { CourseInfoModule } from './features/course-info/course-info.module';
import { CoursesModule } from './features/courses/courses.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { effects, reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { coursesReducer } from './store/courses/courses.reducer';


@NgModule({
  declarations: [
    AppComponent, 
    CourseInfoComponent, 
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    CourseInfoModule,
    CoursesModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('coursesState', coursesReducer),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects) 
  ],
  providers: [AuthorizedGuard, NotAuthorizedGuard, CoursesService, CoursesStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
