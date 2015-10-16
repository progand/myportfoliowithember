import Ember from 'ember';
import PROJECTS from '../fixtures/project';

export default Ember.Route.extend({
    model() {
        return {
            projects: PROJECTS,
            technologies: PROJECTS.reduce((techs, project) => {
                if(project.technologies){
                    return techs.concat(project.technologies);
                }
            }, []).uniq()
        };
    }
});
