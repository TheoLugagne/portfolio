import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { EducationEltComponent } from './education-elt/education-elt.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationEltComponent, SectionComponent, NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  elts: EducationEltComponent[] = [
    {
      name: 'BUT Informatique',
      description: '3eme année de BUT informatique spécialisé en Réalisation d\'applications : conception, développement, validation',
      dateStart: new Date('2022-09-01'),
      dateEnd: null
    },
    {
      name: 'DUT Informatique',
      description: 'DUT informatique spécialisé en Réalisation d\'applications : conception, développement, validation',
      dateStart: new Date('2022-09-01'),
      dateEnd: new Date('2024-09-01')
    },
    {
      name: 'Baccalauréat général Mathématiques et Informatique',
      description: 'Lycée Général et Technologique Gabriel Fauré - Foix (09)\nMention Bien',
      dateStart: new Date('2022-06-01'),
      dateEnd: new Date('2022-07-01')
    }
  ];
}
