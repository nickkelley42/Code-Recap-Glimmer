import EmberRouter from '@ember/routing/router';
import config from 'code-recap-glimmer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('people');
  this.route('decadence');
});
