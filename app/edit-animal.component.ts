import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'edit-animal',
  template: `

  <div class="well"*ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <h3>Edit Animal</h3>
      <label>New Animal Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      <label>New Animal Species:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
      <label>New Animal Sex:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
      <label>New Animal Age:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
        <label>New Animal Diet:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">

      <label>New Animal Location:</label>
      <select class="form-control"  [(ngModel)]="childSelectedAnimal.location">
        <option value="Myth">Myth</option>
        <option value="CreepyCaverns">CreepyCaverns</option>
        <option value="CityScape">CityScape</option>
      </select>

      <label>New Animal Type:</label>
      <select class="form-control"  [(ngModel)]="childSelectedAnimal.type">
        <option value="bird">Bird/Arial</option>
        <option value="mammal">Land/Mammal</option>
        <option value="crawly">Snake/Insect/Crawly</option>
        <option value="water">Fish/Aquatic Mammal</option>
      </select>

      <label>Number of Caretakers:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
      <label>New Animal Likes:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
      <label>New Animal Dislikes:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">

      <label>Real/Imaginary</label>
      <select class="form-control"  [(ngModel)]="childSelectedAnimal.exists">
        <option value=true>Real</option>
        <option value=false>Imaginary</option>
      </select>

      <button  (click)="doneButtonClicked()">Done Editing</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
