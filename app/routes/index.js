import Ember from 'ember';
import FIXTURES from '../fixtures/project';

export default Ember.Route.extend({
    model() {
        return FIXTURES;
    }
});
