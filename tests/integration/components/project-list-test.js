import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | project list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{project-list}}`);

    assert.dom('input').exists({ count: 1 });

    // Template block usage:
    await render(hbs`
      {{#project-list}}
        template block text
      {{/project-list}}
    `);

    assert.notEqual(find('*').textContent.indexOf('template block text'), -1);
  });
});
