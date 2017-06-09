import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'edit-animal',
  template: `

  <div class="well"*ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <h3>Edit Animal</h3>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
      <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
        <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
      <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
      <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
      <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
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
