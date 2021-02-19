import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ConfirmButtonComponent extends Component {
  @action confirm() {
    if (window.confirm(this._message)) {
      this.args.action();
    }
  }

  get _message() {
    return this.args.message || "Are you sure?";
  }
}
