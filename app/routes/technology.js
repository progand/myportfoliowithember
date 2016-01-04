import Ember from 'ember';
import {PROJECTS, TECHNOLOGIES} from '../fixtures/project';

export default Ember.Route.extend({
  model(params) {
    return _.chain(TECHNOLOGIES)
      .findWhere({id: params.technology_id})
      /*.cloneDeep()
      .assign({
        projects: PROJECTS.filter((project) => {
          if (project.technologies) {
            return project.technologies.contains(params.technology_id);
          }
        })
      })*/
      .value();
  }
});
