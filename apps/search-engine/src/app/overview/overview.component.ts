import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'pb-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  constructor(private readonly searchService: SearchService) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('', Validators.required)
    });
  }

  search(): void {
    console.log('val', this.form.value);

    this.searchService.search(this.form.controls['search'].value);
  }
}
