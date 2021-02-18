import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PersonComponent extends Component {
  @service SelectedPerson;

  @action select() {
    this.SelectedPerson.selectPerson(this.args.person);
  }
}
