import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export class MockSelectedPersonService extends Service {
  constructor() {
    super(...arguments);
    this.selectPersonCalls = [];
    this.updatePlanetAndDeselectCalls = [];
  }

  @tracked selected = undefined;

  selectPerson() {
    this.callEach(this.selectPersonCalls, arguments);
  }

  updatePlanetAndDeselect() {
    this.callEach(this.updatePlanetAndDeselectCalls, arguments);
  }

  callEach(functions, args) {
    for (let fn of functions) {
      fn(...args);
    }
  }
}
