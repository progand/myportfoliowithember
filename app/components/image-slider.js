import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var slider = this.$('#image-slider').carousel();
    this.set('slider', slider);
  },
  willDestroyElement() {
    this.get('slider').off();
  }
});
