import Ember from 'ember';
import {PROJECTS} from '../fixtures/project';

export default Ember.Route.extend({
    model(params) {
        return _.findWhere(PROJECTS, {id: params.project_id});
    }
});
