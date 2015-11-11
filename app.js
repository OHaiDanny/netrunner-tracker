CorpList = new Meteor.Collection("Corp");
DivisionList = new Meteor.Collection("Division");

FactionList = new Meteor.Collection("Faction");
RunnerList = new Meteor.Collection("Runner");



if (Meteor.isServer) {
    Meteor.publish("Division", function() {
        return DivisionList.find({});
    });
    Meteor.publish("Corp", function() {
        return CorpList.find({});
    });
    
    Meteor.publish("Faction", function() {
        return FactionList.find({});
    });
    Meteor.publish("Runner", function() {
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
    createCorp: function() {
        var clearList = [CorpList, DivisionList];
        clearDb(clearList); // first wipe all the db collection
        
        var divisions = DivisionFactory.create();
        _.each(divisions, function(division) {
           DivisionList.insert(division); 
        });
        
        //console.log("Divisions: ", DivisionList.find().fetch());
        
        var corporations = CorpFactory.create(DivisionList);
        _.each(corporations, function(corporation) {
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
    createRunner: function() {
        var clearList = [FactionList, RunnerList];
        clearDb(clearList);
        
        var allRunners = RunnerFactory.create();
        _.each(allRunners, function(runner){
            RunnerList.insert(runner);
        });
        console.log("Runner ", RunnerList.find().fetch());
        
        
        var runnerFaction = FactionFactory.create();
        _.each(runnerFaction, function(faction) {
            FactionList.insert(faction);
        });
        
        console.log('Runner Faction: ', FactionList.find().fetch());
    }
});

function clearDb(List) {
    for (var i = 0; i < List.length; i++) {
        _.each(List[i].find().fetch(), function(identity) { // use lodash ._each to loop through each object in the collection
            List[i].remove(identity._id); // delete the objects via their id
        });
    }
}