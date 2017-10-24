var VideoListView = Backbone.View.extend({


  initialize: function() {
    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(video => {
      debugger;
      console.log(video); // THIS IS THE MODEL~!!111111`
      var videoEntry = (new VideoListEntryView({model: video})).render().$el;
      $('.video-list').append(videoEntry);
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html'),

  renderVideoListEntry: function(video) {
    // var movieView = new MovieView({model: movie});
    // this.$el.append(movieView.render());
  }

});
