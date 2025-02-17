import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionComponent } from '../section/section.component';

export interface Skill {
  id: string,
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
  skills: Skill[] = skills
}
export var skills:Skill[] = [
  {
    id: '#realiser',
    title: 'Réaliser',
    description: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
    color: '#B80905'
  },
  {
    id:'#optimiser',
    title: 'Optimiser',
    description: 'Analyser et optimiser des applications',
    color: '#ED8C51'
  },
  {
    id: '#administrer',
    title: 'Administrer',
    description: 'Déployer des services dans une architecture réseau',
    color: '#EFBA11'
  },
  {
    id:'#gerer',
    title: 'Gérer',
    description: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
    color: '#8CC850'
  },
  {
    id: '#conduire',
    title: 'Conduire',
    description: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
    color: '#0A215E'
  },
  {
    id: '#collaborer',
    title: 'Collaborer',
    description: 'Manager une équipe informatique',
    color: '#0F0F0F'
  }
]