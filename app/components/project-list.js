import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  filter: "",
  visibleProjects: computed('filter', 'projects', function () {
    return (this.projects) ? this.projects.filter(project => {
      return project.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
    }) : [];
  })
});
