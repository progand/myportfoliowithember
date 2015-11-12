import Ember from 'ember';
import {PROJECTS, TECHNOLOGIES} from '../fixtures/project';

export default Ember.Route.extend({
    model() {
        return {
            projects: PROJECTS,
            technologies: TECHNOLOGIES
        };
    }
});
