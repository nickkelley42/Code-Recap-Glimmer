import Service from '@ember/service';

export class MockConfirmService extends Service {
  confirm() {
    return true;
  }
}
