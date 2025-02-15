import { Component } from '@angular/core';
import { TimeLocEltComponent } from '../time-loc-elt/time-loc-elt.component';
import { SectionComponent } from '../section/section.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [TimeLocEltComponent, SectionComponent, NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  elts: TimeLocEltComponent[] = [
    {
      name: 'Alternance d\'intégration ERP',
      description: 'Intégration ERP (Odoo / NetSuite)',
      location: 'Gembaware - Toulouse (31)',
      dateStart: new Date('2024-07-01'),
      dateEnd: null
    },
    {
      name: 'Stage d\'intégration ERP',
      description: 'Stage d\'intégration ERP (Odoo / NetSuite)',
      location: 'Gembaware - Toulouse (31)',
      dateStart: new Date('2024-04-01'),
      dateEnd: new Date('2024-06-30')
    }
  ];
}
