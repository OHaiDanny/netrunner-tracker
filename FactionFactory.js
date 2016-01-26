FactionFactory = {};

FactionFactory.create = function (runnerList) {
    return [
        {
            label: "Anarch Faction",
            name:'anarch',
            imageURL: '/img/runner/Anarch_Logo.png',
            clicks: [1,2,3,4],
            tags: 0,
            memoryUnit: 4,
            runners: getRunners('anarch', runnerList),
            currentAgendaPts:0,
            maxAgendaPts:7
        }, {
            label: "Criminal Faction",
            name:'criminal',
            imageURL: '/img/runner/Criminal_Logo.png',
            clicks: [1,2,3,4],
            tags: 0,
            memoryUnit: 4,
            runners: getRunners('criminal', runnerList),
            currentAgendaPts:0,
            maxAgendaPts:7
        }, {
            label: "Shaper Faction",
            name: 'shaper',
            imageURL: '/img/runner/Shaper_Logo.png',
            clicks: [1,2,3,4],
            tags: 0,
            memoryUnit:4,
            runners: getRunners('shaper', runnerList),
            currentAgendaPts:0,
            maxAgendaPts:7
        },{
            label: "Neutral Faction",
            name: 'neutral',
            imageURL: '/img/runner/neutral.png',
            clicks: [1,2,3,4],
            tags: 0,
            memoryUnit:4,
            runners: getRunners('neutral', runnerList),
            currentAgendaPts:0,
            maxAgendaPts:7
        }
    ];
}

function getRunners(name, runnerList) {
    var runnerID = [];
    _.each(runnerList.find({parent: name}).fetch(), function(runner) {
        runnerID.push(runner._id);
    });
    return runnerID;
}