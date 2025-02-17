import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile/profile.component';
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillComponent } from "./skills/skill.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, EducationComponent, ExperienceComponent, SkillComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

export function scrollToId(id: string): void {
  const element = document.querySelector(id);
  if (element) {
    const navbarHeight = 90; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'smooth' // Smooth scrolling
    });
  }
}