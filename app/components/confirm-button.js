import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ConfirmButtonComponent extends Component {
  @service confirmation;

  @action confirm() {
    if (this.confirmation.confirm(this._message)) {
      this.args.action();
    }
  }

  get _message() {
    return this.args.message || "Are you sure?";
  }
}
