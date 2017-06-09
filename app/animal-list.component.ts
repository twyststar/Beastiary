import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChoice($event.target.value)">

    <option value="allAnimals">All Animals</option>
    <optgroup label="Location">
      <option value="myth">Myth</option>
      <option value="cityScape">CityScape</option>
      <option value="creepy">CreepyCaverns</option>
    </optgroup>
    <optgroup label="Filter by Age">
      <option value="age">Youngest to oldest</option>
      <option value="young">10 yrs or younger</option>
      <option value="old">Older than 10yrs</option>
      <option value="ageless">Ageless</option>
    </optgroup>
    <option value="caretakers">Number of caretakers</option>
  </select>

  <hr>
  <div class="panel panel-default" *ngFor="let animal of childAnimalList | filter:filterBySelection">
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
    <button class="btn btn-default" (click)="editButtonHasBeenClicked(animal)">Edit this animal</button>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender= new EventEmitter();

  filterBySelection: string = "allAnimals";

  onChoice(optionFromMenu) {
  this.filterBySelection = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
