import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>The Beastiary</h1>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>



  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Raccoon', 'Rocky', 3, 'omnivore', 'CityScape', 2, 'female', 'shiny things', 'bandit steroetypes'),
    new Animal('Crow', 'Huginn', 3, 'omnivore', 'Myth', 1, 'male', 'thoughts', 'giants'),
    new Animal('Crow', 'Muninn', 3, 'omnivore', 'Myth', 1, 'male', 'memories', 'Loki'),
    new Animal('Unicorn', 'Steve', 3, 'herbivore', 'Myth', 4, 'female', 'PBR', 'evil'),
    new Animal('Snake', 'Draco', 19, 'omnivore', 'CreepyCaverns', 2, 'male', 'the color green', 'pottery'),
    new Animal('Spider', 'Aragog', 40, 'omnivore', 'CreepyCaverns', 1, 'male', 'forbidden forests', 'humans'),
  ];

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }
 finishedEditing() {
   this.selectedAnimal = null;
 }
 addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
