import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { About } from '../../Models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about: About | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAbout().subscribe(data => {
      this.about = data;
    });
  }
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}