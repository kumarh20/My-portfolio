import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../../core/animations/fade-in.animation';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInUp],
  template: `
    <div class="section-title" [@fadeInUp]>
      <p class="section-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
      <h2 class="section-heading">{{ title }}</h2>
      <div class="section-divider"></div>
      <p class="section-description" *ngIf="description">{{ description }}</p>
    </div>
  `,
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
}
