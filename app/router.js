import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('project', {path: '/:project_id'});

  // must be the last one
  this.route('404', { path: '/*path' });
});

export default Router;
