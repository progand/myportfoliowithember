import Ember from 'ember';
import {PROJECTS, TECHNOLOGIES} from '../fixtures/project';

export default Ember.Route.extend({
    model(params) {
        let project = PROJECTS.find(project => params.project_id === project.id),
            technologies = project.technologies,
            parsedTechnologies = {};
        for (let name in TECHNOLOGIES) {
            if(technologies.contains(name)){
                parsedTechnologies[name] = TECHNOLOGIES[name];
            }
        }
        project.technologies = parsedTechnologies;
        return project;
    }
});
