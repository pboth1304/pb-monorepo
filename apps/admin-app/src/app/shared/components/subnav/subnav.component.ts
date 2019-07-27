import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilterTag, SubnavConfig } from '@pb-monorepo/shared/models';

@Component({
  selector: 'pb-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubnavComponent {
  /**
   * Event Emitter for submitting of search value.
   */
  @Output()
  public submitSearchValue: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Event Emitter for selected dropdown value.
   */
  @Output()
  public selectedFilterValue: EventEmitter<FilterTag> = new EventEmitter<
    FilterTag
  >();

  /**
   * Event Emitter to open modal.
   */
  @Output()
  public openModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Config Object of Subnav.
   */
  @Input()
  public subnavConfig: SubnavConfig;

  /**
   * Filter Values.
   */
  @Input()
  public filters: FilterTag[];

  public searchForm: FormGroup = this.fb.group({ search: [''] });

  constructor(private readonly fb: FormBuilder) {}

  /**
   * Emit's search value on keyup.
   */
  public onSearchKeyup(): void {
    this.submitSearchValue.emit(this.searchForm.value);
  }

  /**
   * Emit's the selected Filter value.
   */
  public selectFilter(filter: FilterTag): void {
    this.selectedFilterValue.emit({ ...filter, isSelected: true });
  }

  /**
   * Emit's value to open modal.
   */
  public doOpenModal(): void {
    this.openModal.emit(true);
  }
}
