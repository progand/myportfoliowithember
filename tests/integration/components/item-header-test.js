import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{item-header}}`);

    assert.ok(findAll('a').length);

    // Template block usage:
    await render(hbs`
      {{#item-header}}
        template block text
      {{/item-header}}
    `);

    assert.notEqual(find('*').textContent.indexOf('template block text'), -1);
  });
});
