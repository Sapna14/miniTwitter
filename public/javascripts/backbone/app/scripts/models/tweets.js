/*global Javascripts, Backbone*/

Javascripts.Models = Javascripts.Models || {};

(function () {
  'use strict';

  Javascripts.Models.Tweets = Backbone.Model.extend({

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
