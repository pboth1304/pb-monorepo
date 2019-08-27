import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'pb-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent implements OnInit {
  public projects$: Observable<Project[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getProjects();
  }

  private getProjects(): void {
    this.projects$ = this.apiService.getProjects();
  }
}
