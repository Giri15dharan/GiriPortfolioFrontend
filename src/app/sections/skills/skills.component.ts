import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SkillCategory } from '../../Models/portfolio.model';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressSpinner,
    MatCardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSkills().subscribe(data => {
      this.skillCategories = data;
    });
  }
}
