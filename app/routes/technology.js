import Ember from 'ember';
import {TECHNOLOGIES} from '../fixtures/project';

export default Ember.Route.extend({
  model(params) {
    return _.findWhere(TECHNOLOGIES, {id: params.technology_id});
  }
});
