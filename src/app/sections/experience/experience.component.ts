import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Experience } from '../../Models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getExperiences().subscribe(data => {
      this.experiences = data;
    });
  }
}
