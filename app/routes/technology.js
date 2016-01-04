import Ember from 'ember';
import {TECHNOLOGIES} from '../fixtures/project';

export default Ember.Route.extend({
  model(params) {
    return _.chain(TECHNOLOGIES)
      .findWhere({id: params.technology_id})
      .value();
  }
});
