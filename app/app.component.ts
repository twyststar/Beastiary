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
    new Animal('Raccoon', 'Rocky', 3, 'omnivore', 'CityScape', 0, 'female', 'shiny things', 'daylight'),
    new Animal('Crow', 'Huginn', 3, 'omnivore', 'Myth', 0, 'male', 'thoughts', 'giants'),
    new Animal('Crow', 'Muninn', 3, 'omnivore', 'Myth', 0, 'male', 'memories', 'Loki'),
    new Animal('Unicorn', 'Steve', 3, 'herbivore', 'Myth', 4, 'female', 'PBR', 'evil'),
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
