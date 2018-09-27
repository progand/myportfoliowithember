import Route from '@ember/routing/route';
import { PROJECTS } from '../fixtures/project';

export default Route.extend({
    model(params) {
        return PROJECTS.find(project => project.id === params.project_id);
    }
});
