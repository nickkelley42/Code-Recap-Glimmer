import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PersonEditorComponent extends Component {
  @service SelectedPerson;

  get person() {
    return this.SelectedPerson.selected;
  }

  @action updatePerson(event) {
    this.person.planet = event.target.value;
  }
}
