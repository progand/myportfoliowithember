import Route from '@ember/routing/route';
import ENV from '../config/environment';

export default Route.extend({
    model(params) {
        return ENV.APP.PROJECTS.find(project => project.id === params.project_id);
    }
});
