import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import Service from '@ember/service';
class MockSelectedPersonService extends Service {
  constructor() {
    super(...arguments);
    this.selectPersonCalls = [];
  }

  selectPerson() {
    for (let fn of this.selectPersonCalls) {
      fn(...arguments);
    }
  }
}

module('Integration | Component | person', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:selected-person', MockSelectedPersonService);
  })

  test('it sends its person to SelectedPersonService', async function(assert) {
    // Arrange

    this.person  = { name: 'Namey Nameson', planet: 'Mars' };

    // Add an assertion to the mock service
    const selectedService = this.owner.lookup('service:selected-person');
    selectedService.selectPersonCalls.push((person) => {
      assert.equal(person, this.person, "selectPerson takes a person as an argument");
    });

    // Act
    await render(hbs`
      <Person @person={{person}} />
    `);

    await click('button[data-test-sel="edit-button');

    // Assert
    assert.expect(1);
  });
});
