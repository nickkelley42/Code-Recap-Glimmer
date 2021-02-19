import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SelectedPersonService extends Service {
  @tracked selected = undefined;

  selectPerson(p) {
    if (this.selected) {
      if (!this._confirmReselect(p.name)) {
        return;
      }
    }
    this.selected = p;
  }

  updatePlanetAndDeselect(planet) {
    this.updatePlanet(planet);
    this.deselect();
  }

  updatePlanet(planet) {
    if (this.selected) {
      this.selected.planet = planet;
    }
  }

  deselect() {
    this.selected = undefined;
  }

  _confirmReselect(name) {
    return window.confirm(`A person is already being edited. Select ${name} anyway?`);
  }
}
