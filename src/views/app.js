var AppView = Backbone.View.extend({

  // assigns el to the specific div in the index
  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },

// app.js render
  render: function() {
    // reassigns el's html via the $el.html(...)
    this.$el.html(this.template());
    new SearchView({ el: '.search' }).render();
    new VideoPlayerView({ el: this.$('.player') }).render();
    new VideoListView({ el: this.$('.list'), collection: this.videos }).render();
    return this;
  },

  template: templateURL('src/templates/app.html'),

  // renderSearchView
  renderSearchView: function() {},

  // renderVideoPlayerView
  renderVideoPlayerView: function() {},

  // renderVideoListView
  renderVideoListView: function() {}

});
