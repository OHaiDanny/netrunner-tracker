// Iron-Router
Router.configure({
    layoutTemplate: 'main' // master layout
});

// On load - prompts user to select Corp or Runner ID
Router.route('idSelect', {path: '/'});

Router.route('runnerFactionSelect', {path: '/runner'});
Router.route('runnerSelect', {
    path: '/runner/:_id',
    data: function() {
        var faction = FactionList.findOne(this.params._id);
        var factionName = faction.name;
        var runner = RunnerList.find({parent: factionName}).fetch();
        return {
            faction: faction,
            runner: runner
        }
    }
});

Router.route('corpSelect', {path: '/corp'}); // route to corporation select
Router.route('corpDivisionSelect', { // route to corporation division select
    path: '/corp/:_id',
    data: function() {
        var corp = CorpList.findOne(this.params._id);
        var corpName = corp.name;
        var division = DivisionList.find({parent: corpName}).fetch();
        return { 
            corp: corp,
            division: division
        };
    }
});

Router.route('trackerMain', { // Route to the main tracker page for corporation
    path:'/tracker/:_id',
    data:function() {
        
        if (DivisionList.findOne(this.params._id)) {
            var child = DivisionList.findOne(this.params._id);
            var parent = CorpList.findOne({name: child.parent});
        } else if (RunnerList.findOne(this.params._id)) {
            var child = RunnerList.findOne(this.params._id);
            var parent = FactionList.findOne({name: child.parent});
        }
        
//        console.log('Parent', parent);
//        console.log('Child', child);
        
        return {
            wrapName: 'trackerWrap',
            parent: parent,
            child: child
        }
        
    }
});