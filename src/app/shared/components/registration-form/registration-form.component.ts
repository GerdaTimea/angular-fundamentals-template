import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailAddressValidator } from '@app/shared/directives/email.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      email: new FormControl('', [ Validators.required, emailAddressValidator() ]),
      password: new FormControl('', Validators.required)
    });
  }

  onFormSubmit() {
    this.isSubmitted = true;
  }
}