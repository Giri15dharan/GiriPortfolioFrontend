import { Component, HostListener } from '@angular/core';
import { AboutComponent } from "../sections/about/about.component";
import { SkillsComponent } from "../sections/skills/skills.component";
import { ExperienceComponent } from "../sections/experience/experience.component";
import { ContactComponent } from "../sections/contact/contact.component";
import { CertificationComponent } from "../sections/certification/certification.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, SkillsComponent, ExperienceComponent, ContactComponent, CertificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentSection: string = 'about';
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['about', 'skills', 'experience', 'certification', 'contact'];
    let closestSection = '';
    let minOffset = Number.MAX_VALUE;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const offset = Math.abs(el.getBoundingClientRect().top - 100); // 100px = navbar offset
        if (offset < minOffset) {
          minOffset = offset;
          closestSection = id;
        }
      }
    }

    if (closestSection && this.currentSection !== closestSection) {
      this.currentSection = closestSection;
    }
  }
}
