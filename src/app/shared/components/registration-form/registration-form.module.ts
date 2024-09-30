import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationFormComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule] 
})
export class RegistrationFormModule { }


