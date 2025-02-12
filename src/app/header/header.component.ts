import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MenubarModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      id: "menu-item-1",
      label: "Accueil",
      styleClass: "ui-menu-section-title",
      routerLink: "#"
    },
    {
      id: "menu-item-2",
      label: "Formation",
      styleClass: "ui-menu-section-title",
      routerLink: "#"
    },
    {
      id: "menu-item-3",
      label: "Experiences",
      styleClass: "ui-menu-section-title",
      routerLink: "#"
    },
    {
      id: "menu-item-4",
      label: "Projets",
      styleClass: "ui-menu-section-title",
      routerLink: "#"
    },
    {
      id: "menu-item-4",
      label: "Contact",
      styleClass: "ui-menu-section-title",
      routerLink: "#"
    },
  ]

}
