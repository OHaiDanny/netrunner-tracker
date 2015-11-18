Template.credits.events({
   'click .credit': function(event) {
       var value = $(event.currentTarget).data("value");
       Meteor.call("addCredits", this.corp, value);
   } 
});

Template.badPublicity.events({
   'click .badPub': function(event) {
    var value = $(event.currentTarget).data("value");
    Meteor.call('badPublicity', this.division, value);
   }    
});