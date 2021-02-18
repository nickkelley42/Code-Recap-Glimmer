import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SelectedPersonService extends Service {
  @tracked selected = undefined;

  selectPerson(p) {
    this.selected = p;
  }
}
