import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChoice($event.target.value)">

    <option value="allAnimals">All Animals</option>
    <optgroup label="Location">
      <option value="myth">MythicalMansion</option>
      <option value="cityScape">CityScape</option>
      <option value="Neptune">Neptune</option>
      <option value="creepy">CreepyCaverns</option>
    </optgroup>
    <optgroup label="Reality">
      <option value="real">Real</option>
      <option value="imaginary">Imaginary</option>
    </optgroup>
    <optgroup label="Type">
      <option value="bird">Bird/Arial</option>
      <option value="mammal">Mammal/Land</option>
      <option value="water">Fish/Aquatic</option>
      <option value="crawly">Reptile/Insect/Creeper</option>
    </optgroup>
    <optgroup label="Age">
      <option value="age">Youngest to oldest</option>
      <option value="young">10 yrs or younger</option>
      <option value="old">Older than 10yrs</option>
      <option value="ageless">Ageless</option>
    </optgroup>
    <option value="caretakers">Number of caretakers</option>
  </select>

  <hr>
  <div class="panel" *ngFor="let animal of childAnimalList | filter:filterBySelection">
    <div [class]="animalType(animal)">
    <div class="name">
      <h3>{{animal.name}}</h3>
    </div>
    </div>
    <div class="panel-body">
      <ul>
        <li>{{animal.age}} yr old {{animal.sex}} {{animal.species}}</li>
        <li>Diet: {{animal.diet}}</li>
        <li>Likes: {{animal.likes}}</li>
        <li>Dislikes: {{animal.dislikes}}</li>
      </ul>
    </div>
    <div class="panel-footer">
      <h5>Lives in the {{animal.location}} habitat</h5>
      <h5>Requires {{animal.caretakers}} caretakers.</h5>
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

  animalType(currentAnimal){
    if(currentAnimal.type==="bird"){
      return "panel-bird panel-heading"
    } else if(currentAnimal.type==="crawly"){
      return "panel-heading panel-crawly"
    } else if (currentAnimal.type==="mammal"){
      return "panel-heading panel-mammal"
    } else if (currentAnimal.type === "water"){
      return "panel-heading panel-water"
    }
  }
}
