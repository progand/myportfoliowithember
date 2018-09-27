import Route from '@ember/routing/route';
import { TECHNOLOGIES } from '../fixtures/project';
import _ from 'lodash';

export default Route.extend({
  model(params) {
    return _.find(TECHNOLOGIES, {id: params.technology_id});
  }
});
