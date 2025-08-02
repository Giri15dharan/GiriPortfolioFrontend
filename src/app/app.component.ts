import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GiriPortfolioFrontend';
}
