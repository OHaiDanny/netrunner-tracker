Template.trackerMain.events({
   'click .hexagon': function(event) {
       var value = $(event.currentTarget).data("value");
       Meteor.call("addCredits", this.corp, value);
   }
});