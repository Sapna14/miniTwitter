/*global Javascripts, Backbone*/

Javascripts.Collections = Javascripts.Collections || {};

(function () {
  'use strict';

  Javascripts.Collections.Users = Backbone.Collection.extend({

    model: Javascripts.Models.Users

  });

})();
