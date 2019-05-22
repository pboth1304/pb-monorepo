import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  @Output()
  public submitSearchValue: EventEmitter<string> = new EventEmitter<string>();

  public searchForm: FormGroup = this.fb.group({ search: ['', Validators.required] });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {}

  onSearchKeyup(): void {
    if (this.searchForm.valid) {
      console.log('searchvalue', this.searchForm.value);

      this.submitSearchValue.emit(this.searchForm.value);
    }
  }
}
