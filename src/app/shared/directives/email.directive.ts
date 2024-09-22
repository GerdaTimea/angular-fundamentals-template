import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function emailAddressValidator(): ValidatorFn {  
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (control: AbstractControl): ValidationErrors | null => {    
        const valid = regex.test(control.value);
        console.log("emailAddressValidatorFn: " + valid);
        if (valid) {
            return null;
        } else {
            return {invalidEmail: true};
        }  
    };
}

@Directive({
    selector: '[emailValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true
    }]
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return emailAddressValidator()(control);
    }
}
