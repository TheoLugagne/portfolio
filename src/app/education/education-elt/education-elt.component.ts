import { Component, Input } from '@angular/core';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-education-elt',
  imports: [DatePipe, NgIf],
  templateUrl: './education-elt.component.html',
  styleUrl: './education-elt.component.scss',
  standalone: true
})
export class EducationEltComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() dateStart: Date = new Date();
  @Input() dateEnd: Date | null = null;
}
