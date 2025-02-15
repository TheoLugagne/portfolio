import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile/profile.component';
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, EducationComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
