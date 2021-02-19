import Service from '@ember/service';

export default class ConfirmService extends Service {
  confirm(message) {
    return window.confirm(message);
  }
}
