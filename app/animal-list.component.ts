import { Component, Input } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template: `
  
  <div class="panel panel-default" *ngFor="let animal of childAnimalList">
    <div class="panel-heading">
      <h3>{{animal.name}}</h3>
    </div>
    <div class="panel-body">
      <ul>
        <li>{{animal.age}} yr old {{animal.sex}} {{animal.species}}</li>
        <li>Location: {{animal.location}}</li>
        <li>Diet: {{animal.diet}}</li>
        <li>Likes: {{animal.likes}}</li>
        <li>Dislikes: {{animal.dislikes}}</li>
      </ul>
    </div>
    <div class="panel-footer">
      <h4>Requires {{animal.caretakers}} caretakers.</h4>
    </div>

  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Task[];
}
