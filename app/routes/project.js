import Ember from 'ember';
import {PROJECTS} from '../fixtures/project';
import _ from 'lodash';

export default Ember.Route.extend({
    model(params) {
        return _.find(PROJECTS, {id: params.project_id});
    }
});
