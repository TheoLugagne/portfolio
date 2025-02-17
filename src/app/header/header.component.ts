import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { scrollToId } from '../app.component';

interface NavItem {
  href: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { href: '#profile', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  menuOpen = false;
  active = true; // Default to true for large screens

  constructor() {
    this.updateActiveState();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (window.innerWidth < 768) { // Check if on small screen
      this.active = this.menuOpen; // Set active based on menu state
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateActiveState();
  }

  private updateActiveState() {
    this.active = window.innerWidth >= 768; // Set active to true on large screens
  }

  scrollToSection(id: string): void {
    if (this.active) {
      scrollToId(id)
    }
    if (this.toggleMenu && this.active) {
      this.toggleMenu()
    }
  }
}
