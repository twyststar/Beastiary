import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'new-animal',
  template: `

  <div class="well new">
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
        <option value="MythicalMansion">Myth</option>
        <option value="CreepyCaverns">CreepyCaverns</option>
        <option value="CityScape">CityScape</option>
        <option value="Neptune">Neptune</option>
      </select>

      <label>New Animal Type:</label>
      <select class="form-control"  #newType>
        <option value="bird">Bird/Arial</option>
        <option value="mammal">Land/Mammal</option>
        <option value="crawly">Snake/Insect/Crawly</option>
        <option value="water">Fish/Aquatic Mammal</option>
      </select>

      <label>Number of Caretakers:</label>
      <input class="form-control"  #newCaretakers>
      <label>New Animal Likes:</label>
      <input class="form-control"  #newLikes>
      <label>New Animal Dislikes:</label>
      <input class="form-control"  #newDislikes>

      <label>Real/Imaginary</label>
      <select class="form-control" #newExists>
        <option value=true>Real</option>
        <option value=false>Imaginary</option>
      </select>



      <button class="btn" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newType.value, newExists.value); newName.value=''; newSpecies.value=''; newSex.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newLikes.value=''; newDislikes.value=''; newType.value=''; newExists.value=''">Add new animal</button>
    </div>
  `
})


export class NewAnimalComponent {
  @Output() newAnimalSender= new EventEmitter();

  submitForm(species: string, name: string, age:  number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, type: string, exists: boolean,){
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes, type, exists);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
