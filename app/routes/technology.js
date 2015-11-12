import Ember from 'ember';
import {PROJECTS, TECHNOLOGIES} from '../fixtures/project';

export default Ember.Route.extend({
     model(params) {
        return {
            projects: PROJECTS.filter((project) => {
                if(project.technologies){
                    return project.technologies.contains(params.technology_id);
                }
            }),
            id: params.technology_id
        };
    }
});
