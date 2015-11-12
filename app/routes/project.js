import Ember from 'ember';
import {PROJECTS} from '../fixtures/project';

export default Ember.Route.extend({
    model(params) {
        return FIXTURES.find(project => params.project_id === project.id);
    }
});
