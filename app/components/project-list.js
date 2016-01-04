import Ember from 'ember';

export default Ember.Component.extend({
  filter: "",
  visibleProjects: Ember.computed('filter', 'projects', function () {
    return (this.get('projects')) ? this.get('projects').filter(project => {
      return project.name.toLowerCase().indexOf(this.get('filter').toLowerCase()) !== -1;
    }) : [];
  })
});
