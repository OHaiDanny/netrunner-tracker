(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Iron-Router                                                         //
Router.configure({                                                     // 2
    layoutTemplate: 'main' // master layout                            // 3
});                                                                    //
                                                                       //
// On load - prompts user to select Corp or Runner ID                  //
Router.route('idSelect', { path: '/' });                               // 7
                                                                       //
Router.route('runnerFactionSelect', { path: '/runner' });              // 13
Router.route('runnerSelect', {                                         // 14
    path: '/runner/:_id',                                              // 15
    data: function () {                                                // 16
        var faction = FactionList.findOne(this.params._id);            // 17
        var factionName = faction.name;                                // 18
        var runner = RunnerList.find({ parent: factionName }).fetch();
        console.log(runner);                                           // 20
        return {                                                       // 21
            faction: faction,                                          // 22
            runner: runner                                             // 23
        };                                                             //
    }                                                                  //
});                                                                    //
                                                                       //
Router.route('corpSelect', { path: '/corp' }); // route to corporation select
Router.route('corpDivisionSelect', { // route to corporation division select
    path: '/corp/:_id',                                                // 33
    data: function () {                                                // 34
        var corp = CorpList.findOne(this.params._id);                  // 35
        var corpName = corp.name;                                      // 36
        var division = DivisionList.find({ parent: corpName }).fetch();
        return {                                                       // 38
            corp: corp,                                                // 39
            division: division                                         // 40
        };                                                             //
    }                                                                  //
});                                                                    //
                                                                       //
Router.route('tracker', { // Route to the main tracker page for corporation
    path: '/tracker/:_id',                                             // 46
    data: function () {                                                // 47
        var corp = CorpList.findOne(this.params.id);                   // 48
                                                                       //
        if (corp) {                                                    // 50
            console.log("Corp Tracker:", corp);                        // 51
            return corp;                                               // 52
        }                                                              //
        return {};                                                     // 54
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
