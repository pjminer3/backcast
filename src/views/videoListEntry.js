var VideoListEntryView = Backbone.View.extend({


  initialize: function() {
   // Add stuff once we get things working
  },

  render: function() {
    console.log('Does this render? yes it does');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
