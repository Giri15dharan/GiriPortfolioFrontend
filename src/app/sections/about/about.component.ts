import { Component, HostListener } from '@angular/core';
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
  profileImage: string = '../../../assets/Images/Giri.jpeg';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAbout().subscribe(data => {
      this.about = data;
    });
    this.setProfileImage();
  }

  @HostListener('window:resize')
  onResize() {
    this.setProfileImage();
  }

  setProfileImage() {
    const isMobile = window.innerWidth <= 768;
    this.profileImage = isMobile
      ? '../../../assets/Images/GiriMob.jpeg'
      : '../../../assets/Images/Giri.jpeg';
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}