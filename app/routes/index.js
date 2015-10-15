import Ember from 'ember';
import PROJECTS from '../fixtures/project';
import TECHNOLOGIES from '../fixtures/technology';

export default Ember.Route.extend({
    model() {
        return {
            projects: PROJECTS,
            technologies: TECHNOLOGIES
        };
    }
});
