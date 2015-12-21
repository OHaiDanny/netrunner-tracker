CorpList = new Meteor.Collection("Corp");
DivisionList = new Meteor.Collection("Division");

FactionList = new Meteor.Collection("Faction");
RunnerList = new Meteor.Collection("Runner");



if (Meteor.isServer) {
    Meteor.publish("Division", function () {
        return DivisionList.find({});
    });
    Meteor.publish("Corp", function () {
        return CorpList.find({});
    });

    Meteor.publish("Faction", function () {
        return FactionList.find({});
    });
    Meteor.publish("Runner", function () {
        return RunnerList.find({});
    });
}

if (Meteor.isClient) {
    Meteor.subscribe("Division");
    Meteor.subscribe("Corp");

    Meteor.subscribe("Runner");
    Meteor.subscribe("Faction");
}

Meteor.methods({
    createCorp: function () {
        var clearList = [CorpList, DivisionList];
        clearDb(clearList); // first wipe all the db collection

        var divisions = DivisionFactory.create();
        _.each(divisions, function (division) {
            DivisionList.insert(division);
        });

        //console.log("Divisions: ", DivisionList.find().fetch());

        var corporations = CorpFactory.create(DivisionList);
        _.each(corporations, function (corporation) {
            CorpList.insert(corporation);
        });


        //        _.each(DivisionList.find().fetch(), function(division) {
        //            var divisionParentName = division.parent;
        //            var divisionParent = CorpList.findOne({name: divisionParentName});
        //            var corpDivisions = divisionParent.divisions;
        //            
        //            corpDivisions.push(division._id);
        //            
        //            CorpList.update({name: divisionParentName}, {$set: {divisions: corpDivisions}});
        //            
        //        });

        //console.log("Corps (updated): ", CorpList.find().fetch());

    },
    corpSelected:function(division) {
        DivisionList.update(division._id, {
            $set: {
                selected: true
            }
        });
    },
    createRunner: function () {
        var clearList = [FactionList, RunnerList];
        clearDb(clearList);

        var allRunners = RunnerFactory.create();
        _.each(allRunners, function (runner) {
            RunnerList.insert(runner);
        });

        var runnerFaction = FactionFactory.create(RunnerList);
        _.each(runnerFaction, function (faction) {
            FactionList.insert(faction);
        });
    },
    runnerSelected:function(runner) {
        RunnerList.update(runner._id, {
           $set: {
               selected: true
           } 
        });
    },
    zeroCredits: function (parent) {
        if (CorpList.findOne({_id: parent._id})) {
            CorpList.update(parent._id, {
                $set: {
                    credits: 0
                }
            });
        } else {
            FactionList.update(parent._id, {
                $set: {
                    credits: 0
                }
            });
        }
    },
    credits: function (parent, value) {
        if (CorpList.findOne({_id: parent._id})) {
            CorpList.update(parent._id, {
                $set: {
                    credits: parent.credits + value
                }
            });
        } else {
            FactionList.update(parent._id, {
                $set: {
                    credits: parent.credits + value
                }
            });
        }
    },
    badPublicity: function (division, value) {
        DivisionList.update(division._id, {
            $set: {
                badPublicity: division.badPublicity + value
            }
        });
    },
    agenda: function (corp, value) {
        CorpList.update(corp._id, {
            $set: {
                currentAgendaPts: corp.currentAgendaPts + value
            }
        });
    },
    tag: function (faction, value) {
        FactionList.update(faction._id, {
            $set: {
                tags: faction.tags + value
            }
        });
    },
    mu: function (faction, value) {
        FactionList.update(faction._id, {
            $set: {
                memoryUnit: faction.memoryUnit + value
            }
        });
    },
    link: function (runner, value) {
        RunnerList.update(runner._id, {
            $set: {
                link: runner.link + value
            }
        });
    }
});

clearDb = function (List) {
    for (var i = 0; i < List.length; i++) {
        _.each(List[i].find().fetch(), function (identity) { // use lodash ._each to loop through each object in the collection
            List[i].remove(identity._id); // delete the objects via their id
        });
    }
}