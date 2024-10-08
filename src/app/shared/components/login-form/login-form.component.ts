import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;
  isSubmitted: boolean = false;

  onFormSubmit(loginForm: NgForm) {
    this.isSubmitted = true;
  }
}
