import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { MockSelectedPersonService } from './MockSelectedPersonService';
import { MockConfirmService } from './MockConfirmService';

module('Integration | Component | person-editor', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:selected-person', MockSelectedPersonService);
    this.owner.register('service:confirmation', MockConfirmService);
  });

  test('it calls updatePlanetAndDeselect on update', async function(assert) {
    // Arrange
    this.person = { name: 'Namey Nameson', planet: 'mars' };

    const selectedService = this.owner.lookup('service:selected-person');
    selectedService.selected = this.person;
    selectedService.updatePlanetAndDeselectCalls.push((planet) => {
      assert.equal(typeof planet, 'string', 'planet should be a string');
    });

    await render(hbs`<PersonEditor />`);

    // Act
    await click('button[data-test-sel="edit-confirm-button"]');

    // Assert
    assert.expect(1);
  });
});
