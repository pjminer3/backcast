var Video = Backbone.Model.extend({

  initialize: function(video) {
    console.log('vid', video.id.videoId);
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
