import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() buttonText?: string; 
  @Input() iconName?: IconName;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}