import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SkillCategory } from '../../Models/portfolio.model';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressSpinner,
    MatCardModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [];
  constructor(private apiService: ApiService) { }
  isMobile(): boolean {
    return window.innerWidth <= 786;
  }

  ngOnInit(): void {
    this.apiService.getSkills().subscribe(data => {
      this.skillCategories = data;
    });
  }

  toggleFlip(skill: any): void {
    if (window.innerWidth <= 786) {
      skill.hover = !skill.hover;
    }
  }
}
