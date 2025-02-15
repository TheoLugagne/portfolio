import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-profile',
  imports: [SectionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile = {
    name: 'Théo Lugagne',
    description: "I'm a software engineer with a passion for building scalable and efficient systems.",
    image: 'images/profile.jpg'
  }
}
