import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <select id="sort" (change)="onChange($event)" class="selectFilter">
        <option disabled defaultValue hidden>Filtres</option>
        <option value="asc">1 - 800</option>
        <option value="desc">800 - 1</option>
      </select>
    </div>
  `,
  styleUrls: ['./filter.css']
})
export class FilterComponent {
  @Output() orderChange = new EventEmitter<'asc' | 'desc'>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'asc' | 'desc';
    this.orderChange.emit(value);
  }
}
