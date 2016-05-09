import Ember from 'ember';
import {TECHNOLOGIES} from '../fixtures/project';
import _ from 'lodash';

export default Ember.Route.extend({
  model(params) {
    return _.find(TECHNOLOGIES, {id: params.technology_id});
  }
});
