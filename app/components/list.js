import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ListComponent extends Component {
  perPage = 10;
  @tracked currentPage = 0;

  get start() { return this.currentPage * this.perPage; }
  get end() { return this.start + this.perPage; }

  get results() {
    const items = this.args.items;
    return items.slice(this.start, this.end);
  }

  @action nextPage() { this.currentPage += 1; }
  @action prevPage() { this.currentPage -= 1; }
}
