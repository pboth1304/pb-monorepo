import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Tag, FilterTag } from 'src/app/shared/models/tag.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Output()
  public submitSearchValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public selectedFilterValue: EventEmitter<FilterTag> = new EventEmitter<FilterTag>();

  @Input()
  public filters: FilterTag[];

  public searchForm: FormGroup = this.fb.group({ search: [''] });

  constructor(private readonly fb: FormBuilder) {}

  public onSearchKeyup(): void {
    this.submitSearchValue.emit(this.searchForm.value);
  }

  public selectFilter(filter: FilterTag): void {
    this.selectedFilterValue.emit({ ...filter, isSelected: true });
  }
}
