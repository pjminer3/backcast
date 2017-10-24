var VideoListView = Backbone.View.extend({


  initialize: function() {
    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(vid => {
      debugger;
      console.log(vid); // THIS IS THE MODEL~!!111111`
      var videoEntry = (new VideoListEntryView({model: vid})).render().$el;
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
