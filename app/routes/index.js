import Route from '@ember/routing/route';
import PROJECTS from '../fixtures/projects'

export default Route.extend({
    model() {
        return {
            projects: PROJECTS
        };
    }
});
