require(['backbone', 'router'], function (Backbone, Router) {
  'use strict';
  window.router = new Router({ pushState: true });
  Backbone.history.start();
});
