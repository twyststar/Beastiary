import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Animal[], desiredFilter) {
    var output: Animal[] = [];
    var filteredOutput: Animal[] = [];

    for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
    }

    if (desiredFilter === "allAnimals") {
      return output
    }
    else if (desiredFilter === "caretakers") {
      output.sort(function(a, b){
        return a.caretakers - b.caretakers;
      })
    }
    else if (desiredFilter === "myth") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].location === 'MythicalMansion'){
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if (desiredFilter === "cityScape"){
      for (var i = 0; i < output.length; i++) {
        if (output[i].location === 'CityScape') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if (desiredFilter === "Neptune"){
      for (var i = 0; i < output.length; i++) {
        if (output[i].location === 'Neptune') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if (desiredFilter === "creepy") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].location === 'CreepyCaverns') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if (desiredFilter === "age") {
      output.sort(function(a, b){
        return a.age - b.age;
      });
    }
    else if (desiredFilter === "young") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].age <= 10){
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "old"){
      for (var i = 0; i < output.length; i++) {
        if (output[i].age >= 11 && output[i].age <= 100){
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "ageless") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].age >= 101) {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === 'bird') {
      for (var i = 0; i < output.length; i++) {
        if (output[i].type === 'bird') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "mammal") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].type === 'mammal') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "water") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].type === 'water') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "crawly") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].type === 'crawly') {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "real") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].exists === true) {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    else if(desiredFilter === "imaginary") {
      for (var i = 0; i < output.length; i++) {
        if (output[i].exists === false) {
          filteredOutput.push(output[i]);
        }
      }
    return filteredOutput;
    }
    return output
  }
}
