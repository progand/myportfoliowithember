import Ember from 'ember';
import FIXTURES from '../fixtures/project';

export default Ember.Route.extend({
     model(params) {
        return {
            projects: FIXTURES.filter((project) => {
                if(project.technologies){
                    return project.technologies.contains(params.technology_id);
                }
            }),
            id: params.technology_id
        };
    }
});
