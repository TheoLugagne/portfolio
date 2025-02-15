import { DatePipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-loc-elt',
  imports: [NgIf, DatePipe],
  templateUrl: './time-loc-elt.component.html',
  styleUrl: './time-loc-elt.component.scss'
})
export class TimeLocEltComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() location: string = "";
  @Input() dateStart: Date = new Date();
  @Input() dateEnd: Date | null = null;
}
