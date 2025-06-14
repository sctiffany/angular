import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="performance">
      Informations à propos de l'app - Angular
      <div>TTFB : à ajouter</div>
      <div>FCP : à ajouter</div>
      <div>LCP : à ajouter</div>
    </div>
  `,
  //styles: []
})
export class PerformanceStatsComponent {}
