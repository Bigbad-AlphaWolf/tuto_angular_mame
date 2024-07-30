import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../models/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.scss'
})
export class ListPersonsComponent {
  @Input() listPersons: Person[] = [];

}
