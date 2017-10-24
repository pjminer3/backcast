var SearchView = Backbone.View.extend({

  // el: ".search",

  initialize: function() {
    // this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // modify template with real data
    return this;
  },

  template: templateURL('src/templates/search.html')

});
