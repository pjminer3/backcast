var AppView = Backbone.View.extend({

  // assigns el to the specific div in the index
  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    new SearchView();
    new VideoPlayerView();
    new VideoListView();
    //new VideoListEntryView();
  },

// app.js render
  render: function() {
    // reassigns el's html via the $el.html(...)
    this.$el.html(this.template());
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
