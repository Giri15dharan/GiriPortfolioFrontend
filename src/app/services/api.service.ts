import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About, Certification, ContactForm, Education, Experience, SkillCategory } from '../Models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://giriportfoliobackend.onrender.com/api/portfolio';

  constructor(private http: HttpClient) { }

  getAbout(): Observable<About> {
    return this.http.get<About>(`${this.baseUrl}/about`);
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(`${this.baseUrl}/skills`);
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`);
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/education`);
  }

  getCertification(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.baseUrl}/certification`);
  }
  sendContact(form: ContactForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact`, form);
  }
}
