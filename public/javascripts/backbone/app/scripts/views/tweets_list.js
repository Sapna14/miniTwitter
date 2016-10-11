/*global Backbone, Backbone, JST*/

Backbone.Views = Backbone.Views || {};

(function () {
  'use strict';

  Backbone.Views.TweetsList = Backbone.View.extend({

    template: JST['app/scripts/templates/tweets_list.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
