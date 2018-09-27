import Route from '@ember/routing/route';
import { PROJECTS, TECHNOLOGIES } from '../fixtures/project';

export default Route.extend({
    model() {
        return {
            projects: PROJECTS,
            technologies: TECHNOLOGIES
        };
    }
});
