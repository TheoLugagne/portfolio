import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [NgFor, NgClass],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contactLinks: ContactLink[] = [
    { label: 'GitHub', url: 'https://github.com/TheoLugagne' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tlugagne/' },
    { label: 'Email Me', url: 'mailto:lugane.theo@gmail.com' },
    { label: 'Download CV', url: 'assets/CV.pdf' }
  ];

  getIconClass(label: string): string {
    switch (label) {
      case 'GitHub':
        return 'fab fa-github';
      case 'LinkedIn':
        return 'fab fa-linkedin';
      case 'Email Me':
        return 'fas fa-envelope';
      case 'Download CV':
        return 'fas fa-file-download';
      default:
        return '';
    }
  }
}
