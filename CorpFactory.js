CorpFactory = {}

CorpFactory.create = function (divisionList) {
    return [
      {
        label: 'Haas-Bioroid',
        name: 'haasBioroid',
        imageURL: '/img/corp/sm/HB_Logo.png',
        clicks: [1,2,3],
        divisions: getDivision('haasBioroid', divisionList),
        currentAgendaPts:0,
        maxAgendaPts:7
      },{
        label: 'Jinteki',
        name: 'jinteki',
        imageURL: '/img/corp/sm/Jinteki_Logo.png',
        clicks: [1,2,3],
        divisions: getDivision('jinteki', divisionList),
        currentAgendaPts:0,
        maxAgendaPts:7
      }, {
        label: 'NBN',
        name: 'nbn',
        imageURL: '/img/corp/sm/NBN_Logo.png',
        clicks: [1,2,3],
        divisions: getDivision('nbn', divisionList),
        currentAgendaPts:0,
        maxAgendaPts:7
      }, {
        label: 'Weyland Consortium',
        name: 'weyland',
        imageURL: '/img/corp/sm/Weyland_Logo.png',
        clicks: [1,2,3],
        divisions: getDivision('weyland', divisionList),
        currentAgendaPts:0,
        maxAgendaPts:7
      }
    ];
}

function getDivision(name, divisionList) {
    var divisionID = [];
    _.each(divisionList.find({parent: name}).fetch(), function(division) {
        divisionID.push(division._id);
    });
    return divisionID;
}