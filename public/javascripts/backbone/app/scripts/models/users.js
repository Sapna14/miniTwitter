/*global Javascripts, Backbone*/

Javascripts.Models = Javascripts.Models || {};

(function () {
  'use strict';

  Javascripts.Models.Users = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
