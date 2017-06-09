import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'header',
  template: `
  <div class="heading">
    <h1>The Beastiary</h1>
    <h3>A Handy Guide to Our Furred/Footless/Feathered/Firery Friends</h3>
    <h4>Remember: whether real or imaginary; living in the CityScape, Neptune, Myth, or the CreepyCaves; newly hatched or immortal; our animals need you! (Well, most of them do...)</h4>
  </div>
  `
})

export class HeaderComponent {}
