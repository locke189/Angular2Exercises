import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <p><input type="text" [(ngModel)]="person.name"></p>
    <p><input type="text" [(ngModel)]="person.name"></p>
  `,
  styleUrls: ['./two-w-aydatabinding.component.css']
})

export class TwoWAydatabindingComponent {
  person = {
    name: 'max',
    age: 27
  }

}
