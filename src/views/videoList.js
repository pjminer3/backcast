var VideoListView = Backbone.View.extend({

  // el: ".list",

  initialize: function() {
    // this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // loop over data, creating new videoListEntries from the html
    window.exampleVideoData.forEach(video => {
      var newVid = new VideoListEntryView(video);
      $('.video-list').append(newVid.render());
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html'),

  renderVideoListEntry: function(video) {
    // var movieView = new MovieView({model: movie});
    // this.$el.append(movieView.render());
  }

});
