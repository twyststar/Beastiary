import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>The Beastiary</h1>

  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  `
})

export class AppComponent {

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Raccoon', 'Rocky', 4, 'omnivore', 'CityScape', 2, 'female', 'shiny things', 'bandit steroetypes', 'mammal', true),
    new Animal('Crow', 'Huginn', 800, 'omnivore', 'Myth', 1, 'male', 'thoughts', 'giants', 'bird', false),
    new Animal('Crow', 'Muninn', 800, 'omnivore', 'Myth', 1, 'male', 'memories', 'Loki', 'bird',false),
    new Animal('Unicorn', 'Steve', 3, 'herbivore', 'Myth', 4, 'female', 'PBR', 'evil', 'mammal', false),
    new Animal('Snake', 'Draco', 19, 'omnivore', 'CreepyCaverns', 2, 'male', 'the color green', 'pottery', 'crawly', true),
    new Animal('Spider', 'Aragog', 40, 'omnivore', 'CreepyCaverns', 1, 'male', 'forbidden forests', 'humans', 'crawly', false),
    new Animal('Pigeon', 'Bob', 5, 'omnivore', 'CityScape', 0, 'male', 'anything people drop', 'crows', 'bird', true),
    new Animal('Mermaid', 'Ariel', 40, 'omnivore', 'CityScape', 2, 'female', 'thing-a-ma-bobs', 'silence', 'water', false),
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
