Template.idSelect.events({
    'click #corpBtn': function(event) {
        Meteor.call('createCorp');
    },
    'click #runnerBtn': function(event) {
        Meteor.call('createRunner');
    }
});