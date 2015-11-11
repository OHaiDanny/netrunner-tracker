(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// app.js                                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CorpList = new Meteor.Collection("Corp");                              // 1
DivisionList = new Meteor.Collection("Division");                      // 2
                                                                       //
FactionList = new Meteor.Collection("Faction");                        // 4
RunnerList = new Meteor.Collection("Runner");                          // 5
                                                                       //
if (Meteor.isServer) {                                                 // 9
    Meteor.publish("Division", function () {                           // 10
        return DivisionList.find({});                                  // 11
    });                                                                //
    Meteor.publish("Corp", function () {                               // 13
        return CorpList.find({});                                      // 14
    });                                                                //
                                                                       //
    Meteor.publish("Faction", function () {                            // 17
        return FactionList.find({});                                   // 18
    });                                                                //
    Meteor.publish("Runner", function () {                             // 20
        return RunnerList.find({});                                    // 21
    });                                                                //
}                                                                      //
                                                                       //
if (Meteor.isClient) {                                                 // 25
    Meteor.subscribe("Division");                                      // 26
    Meteor.subscribe("Corp");                                          // 27
                                                                       //
    Meteor.subscribe("Runner");                                        // 29
    Meteor.subscribe("Faction");                                       // 30
}                                                                      //
                                                                       //
Meteor.methods({                                                       // 33
    createCorp: function () {                                          // 34
        var clearList = [CorpList, DivisionList];                      // 35
        clearDb(clearList); // first wipe all the db collection        // 36
                                                                       //
        var divisions = DivisionFactory.create();                      // 38
        _.each(divisions, function (division) {                        // 39
            DivisionList.insert(division);                             // 40
        });                                                            //
                                                                       //
        //console.log("Divisions: ", DivisionList.find().fetch());     //
                                                                       //
        var corporations = CorpFactory.create(DivisionList);           // 45
        _.each(corporations, function (corporation) {                  // 46
            CorpList.insert(corporation);                              // 47
        });                                                            //
                                                                       //
        //        _.each(DivisionList.find().fetch(), function(division) {
        //            var divisionParentName = division.parent;        //
        //            var divisionParent = CorpList.findOne({name: divisionParentName});
        //            var corpDivisions = divisionParent.divisions;    //
        //                                                             //
        //            corpDivisions.push(division._id);                //
        //                                                             //
        //            CorpList.update({name: divisionParentName}, {$set: {divisions: corpDivisions}});
        //                                                             //
        //        });                                                  //
                                                                       //
        //console.log("Corps (updated): ", CorpList.find().fetch());   //
    },                                                                 //
    createRunner: function () {                                        // 65
        var clearList = [FactionList, RunnerList];                     // 66
        clearDb(clearList);                                            // 67
                                                                       //
        var allRunners = RunnerFactory.create();                       // 69
        _.each(allRunners, function (runner) {                         // 70
            RunnerList.insert(runner);                                 // 71
        });                                                            //
        console.log("Runner ", RunnerList.find().fetch());             // 73
                                                                       //
        var runnerFaction = FactionFactory.create();                   // 76
        _.each(runnerFaction, function (faction) {                     // 77
            FactionList.insert(faction);                               // 78
        });                                                            //
                                                                       //
        console.log('Runner Faction: ', FactionList.find().fetch());   // 81
    }                                                                  //
});                                                                    //
                                                                       //
function clearDb(List) {                                               // 85
    for (var i = 0; i < List.length; i++) {                            // 86
        _.each(List[i].find().fetch(), function (identity) {           // 87
            // use lodash ._each to loop through each object in the collection
            List[i].remove(identity._id); // delete the objects via their id
        });                                                            //
    }                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
