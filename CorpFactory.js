CorpFactory = {}

CorpFactory.create = function (divisionList) {
    return [
      {
        label: 'Haas-Bioroid',
        name: 'haasBioroid',
        imageURL: '/img/corp/sm/HB_Logo.png',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('haasBioroid', divisionList)
      },{
        label: 'Jinteki',
        name: 'jinteki',
        imageURL: '/img/corp/sm/Jinteki_Logo.png',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('jinteki', divisionList)
      }, {
        label: 'NBN',
        name: 'nbn',
        imageURL: '/img/corp/sm/NBN_Logo.png',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('nbn', divisionList)
      }, {
        label: 'Weyland Consortium',
        name: 'weyland',
        imageURL: '/img/corp/sm/Weyland_Logo.png',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('weyland', divisionList)
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