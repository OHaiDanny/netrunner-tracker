(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/idSelect.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.idSelect.events({                                             // 1
    'click #corpBtn': function (event) {                               // 2
        Meteor.call('createCorp');                                     // 3
    },                                                                 //
    'click #runnerBtn': function (event) {                             // 5
        Meteor.call('createRunner');                                   // 6
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
