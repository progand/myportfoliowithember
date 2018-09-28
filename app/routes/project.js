import Route from '@ember/routing/route';
import PROJECTS from '../fixtures/projects'

export default Route.extend({
    model(params) {
        return PROJECTS.find(project => project.id === params.project_id);
    }
});
