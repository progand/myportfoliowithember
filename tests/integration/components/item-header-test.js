import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-header', 'Integration | Component | item header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-header}}`);

  assert.ok(this.$('a').length);

  // Template block usage:
  this.render(hbs`
    {{#item-header}}
      template block text
    {{/item-header}}
  `);

  assert.notEqual(this.$().text().indexOf('template block text'), -1);
});
