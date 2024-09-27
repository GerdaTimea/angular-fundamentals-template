import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @ViewChild('searchForm') public searchForm!: NgForm;
  @Input() placeholder!: string;

  @Output() search = new EventEmitter<string>();

  onFormSubmit(searchForm: NgForm): void {
    this.search.emit(searchForm.value.search);
  }
}

