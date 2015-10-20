import Ember from 'ember';
import FIXTURES from '../fixtures/project';

export default Ember.Route.extend({
    model() {
        return {
            projects: FIXTURES,
            technologies: FIXTURES.reduce((techs, project) => {
                if(project.technologies){
                    return techs.concat(project.technologies);
                }
            }, []).uniq()
        };
    }
});
