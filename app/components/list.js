import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ListComponent extends Component {
  perPage = 5;
  @tracked currentPage = 0;

  get results() {
    const items = this.args.items;
    return items.slice(this.start, this.end);
  }

  get start() { return this.currentPage * this.perPage; }
  get end() { return this.start + this.perPage; }

  @action nextPage() { this.setPage(this.currentPage + 1); }
  @action prevPage() { this.setPage(this.currentPage - 1); }

  setPage(p) {
    this.currentPage = p;
    this.ensureValidPage();
  }

  ensureValidPage() {
    const last = this.lastValidPage();
    if (this.currentPage < 0) {
      this.currentPage = last;
    } else if (this.currentPage > last) {
      this.currentPage = 0;
    }
  }
  lastValidPage() {
    const length = this.args.items.length;
    const perPage = this.perPage;
    return Math.floor(length / perPage);
  }
}
