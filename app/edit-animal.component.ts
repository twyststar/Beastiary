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
      <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
      <label>Number of Caretakers:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
      <label>New Animal Likes:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
      <label>New Animal Dislikes:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
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
