import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { MockConfirmService } from './MockConfirmService';

module('Integration | Component | confirm-button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:confirmation', MockConfirmService);
  });

  test('it calls the action provided via the template', async function(assert) {
    this.myAction = function() {
      assert.ok(true, "myAction was triggered");
    }
    await render(hbs`
      <ConfirmButton @action={{myAction}}>Button</ConfirmButton>
    `);

    await click('button');

    assert.expect(1, 'myAction should trigger');
  });
});
