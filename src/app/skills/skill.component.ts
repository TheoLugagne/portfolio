import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionComponent } from '../section/section.component';

interface Skill {
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [NgFor, SectionComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skills: Skill[] = [
    {
      title: 'Réaliser',
      description: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
      color: '#3498db'
    },
    {
      title: 'Optimiser',
      description: 'Analyser et optimiser des applications',
      color: '#2ecc71'
    },
    {
      title: 'Administrer',
      description: 'Déployer des services dans une architecture réseau',
      color: '#e74c3c'
    },
    {
      title: 'Gérer',
      description: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
      color: '#f1c40f'
    },
    {
      title: 'Conduire',
      description: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
      color: '#9b59b6'
    },
    {
      title: 'Collaborer',
      description: 'Manager une équipe informatique',
      color: '#34495e'
    }
  ];
}
