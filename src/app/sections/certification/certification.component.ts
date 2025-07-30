import { Component } from '@angular/core';
import { Certification } from '../../Models/portfolio.model';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  certifications: Certification[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCertification().subscribe(data => {
      this.certifications = data;
    });
  }
}