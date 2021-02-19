import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PersonEditorComponent extends Component {
  @service SelectedPerson;

  newPlanet = "";

  get person() {
    return this.SelectedPerson.selected;
  }

  @action update() {
    this.SelectedPerson.updatePlanetAndDeselect(this.newPlanet);
  }

  @action cancel() {
    this.SelectedPerson.deselect();
  }
}
