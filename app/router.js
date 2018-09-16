import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('project', {path: '/:project_id'});
  this.route('technology', {path: '/technology/:technology_id'});
});

export default Router;
