CorpList = new Meteor.Collection("Corp");
DivisionList = new Meteor.Collection("Division");

RunnerList = new Meteor.Collection("Runner");


if (Meteor.isServer) {
    Meteor.publish("Division", function() {
        return CorpList.find({});
    });
    Meteor.publish("Corp", function() {
        return CorpList.find({});
    });
    
    Meteor.publish("Runner", function() {
        return RunnerList.find({});
    });
}

if (Meteor.isClient) {
    Meteor.subscribe("Division");
    Meteor.subscribe("Corp");
    
    Meteor.subscribe("Runner");
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
        var clearList = RunnerList;
        clearDb(clearList);
        
        var runnerFaction = RunnerFactory.create();
        _.each(runnerFaction, function(division, i) {
            RunnerList.insert(division);
        });
        
        console.log('Runner Faction: ', RunnerList.find().fetch());
    }
});

function clearDb(List) {
    for (var i = 0; i < List.length; i++) {
        _.each(List[i].find().fetch(), function(corp) { // use lodash ._each to loop through each object in the collection
            List[i].remove(corp._id); // delete the objects via their id
        });
    }
}