import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `

  <header></header>
  <div class="container">
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Raccoon', 'Rocky', 4, 'omnivore', 'CityScape', 2, 'female', 'shiny things', 'bandit steroetypes', 'mammal', true),
    new Animal('Crow', 'Huginn', 800, 'omnivore', 'MythicalMansion', 1, 'male', 'thoughts', 'giants', 'bird', false),
    new Animal('Crow', 'Muninn', 800, 'omnivore', 'MythicalMansion', 1, 'male', 'memories', 'Loki', 'bird',false),
    new Animal('SeaWitch', 'Ursula', 237, 'Souls', 'Neptune', 2, 'female', 'souls', 'Ariel', 'water', false),
    new Animal('Unicorn', 'Steve', 3, 'herbivore', 'MythicalMansion', 4, 'female', 'PBR', 'evil', 'mammal', false),
    new Animal('Snake', 'Draco', 19, 'omnivore', 'CreepyCaverns', 2, 'male', 'the color green', 'pottery', 'crawly', true),
    new Animal('Fish', 'Moby', 4, 'other fish', 'Neptune', 0, 'female', 'fish', 'hooks', 'water', true),
    new Animal('Spider', 'Aragog', 40, 'omnivore', 'CreepyCaverns', 1, 'male', 'forbidden forests', 'humans', 'crawly', false),
    new Animal('Pigeon', 'Bob', 5, 'omnivore', 'CityScape', 0, 'male', 'anything people drop', 'crows', 'bird', true),
    new Animal('Cat', 'Lorelai', 2, 'friskies', 'CityScape', 5, 'female', 'tummy rubs', 'tummy rubs', 'mammal', true),
    new Animal('Mermaid', 'Ariel', 40, 'omnivore', 'Neptune', 2, 'female', 'thing-a-ma-bobs', 'silence', 'water', false),
    new Animal('ROUS', 'DP Roberts', 35, 'omnivore', 'CreepyCaverns', 2, 'male', 'fireswamps', 'the princess', 'crawly', true),
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
