import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        let hours: number = Math.floor(value / 60);
        let minutes: number = value % 60;
        let convertedHours: string = hours.toString();
        let convertedMinutes: string = minutes.toString();
        if (hours < 10) {
            convertedHours = convertedHours.padStart(2, '0');
        }
        if (minutes < 10) {
            convertedMinutes = convertedMinutes.padStart(2, '0');
        }
        return `${convertedHours}:${convertedMinutes} hours`;
    }
}
