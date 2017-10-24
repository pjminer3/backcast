var VideoListEntryView = Backbone.View.extend({


  initialize: function() {
    // window.exampleVideoData.forEach(video => {
    //   let video = new Videos();
    //   video.render();
    // });
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
