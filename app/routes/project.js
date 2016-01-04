import Ember from 'ember';
import {PROJECTS} from '../fixtures/project';

export default Ember.Route.extend({
    model(params) {
        return PROJECTS.find(project => params.project_id === project.id);
    }
});
