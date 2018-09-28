import Route from '@ember/routing/route';
import PROJECTS from '../fixtures/projects'

export default Route.extend({ 
    model(params) {
        const project = PROJECTS.find(project => project.id === params.project_id);
        if (project) {
            return project;
        } else {
            this.transitionTo('404');
        }
    }
});
