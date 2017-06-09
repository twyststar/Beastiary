import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>The Beastiary</h1>
  <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Raccoon', 'Rocky', 3, 'omnivore', 'CityScape', 0, 'female', 'shiny things', 'daylight'),
    new Animal('Crow', 'Huginn', 3, 'omnivore', 'Myth', 0, 'male', 'thoughts', 'giants'),
    new Animal('Crow', 'Muninn', 3, 'omnivore', 'Myth', 0, 'male', 'memories', 'Loki'),
    new Animal('Unicorn', 'Steve', 3, 'herbivore', 'Myth', 4, 'female', 'PBR', 'evil'),
  ];

}
