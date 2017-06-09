import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'new-animal',
  template: `

  <div class="well">
      <h3>New Animal</h3>
      <label>New Animal Name:</label>
      <input class="form-control"  #newName>
      <label>New Animal Species:</label>
      <input class="form-control"  #newSpecies>
      <label>New Animal Sex:</label>
      <input class="form-control"  #newSex>
      <label>New Animal Age:</label>
      <input class="form-control"  #newAge>
      <label>New Animal Diet:</label>
      <input class="form-control"  #newDiet>
      <label>New Animal Location:</label>
      <select class="form-control"  #newLocation>
        <option value="Myth">Myth</option>
        <option value="CreepyCaverns">CreepyCaverns</option>
        <option value="CityScape">CityScape</option>
      </select>
      <label>Number of Caretakers:</label>
      <input class="form-control"  #newCaretakers>
      <label>New Animal Likes:</label>
      <input class="form-control"  #newLikes>
      <label>New Animal Dislikes:</label>
      <input class="form-control"  #newDislikes>

      <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newSex.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newLikes.value=''; newDislikes.value='';">Add new anilmal</button>
    </div>
  `
})


export class NewAnimalComponent {
  @Output() newAnimalSender= new EventEmitter();

  submitForm(species: string, name: string, age:  number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string,){
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
