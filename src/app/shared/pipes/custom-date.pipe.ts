import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
    transform(value: Date | string): string {
        if (!value) {
            return 'Missing date';
        }
        let date = new Date(value);
        let day = (date.getDate()).toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }
}
