import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    var slider = this.$('#image-slider').carousel();
    this.set('slider', slider);
  },
  willDestroyElement() {
    this.slider.off();
  }
});
