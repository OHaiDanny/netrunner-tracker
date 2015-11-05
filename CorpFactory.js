CorpFactory = {}

CorpFactory.create = function (divisionList) {
    return [
      {
        label: 'Haas-Bioroid',
        name: 'haasBioroid',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('haasBioroid', divisionList)
      },{
        label: 'Jinteki',
        name: 'jinteki',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('jinteki', divisionList)
      }, {
        label: 'NBN',
        name: 'nbn',
        numOfClicks: 3,
        isSelected:false,
        divisions: getDivision('nbn', divisionList)
      }, {
        label: 'Weyland Consortium',
        name: 'weyland',
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