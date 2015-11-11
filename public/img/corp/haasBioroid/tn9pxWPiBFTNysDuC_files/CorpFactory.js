(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// CorpFactory.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CorpFactory = {};                                                      // 1
                                                                       //
CorpFactory.create = function (divisionList) {                         // 3
  return [{                                                            // 4
    label: 'Haas-Bioroid',                                             // 6
    name: 'haasBioroid',                                               // 7
    imageURL: '/img/corp/sm/HB_Logo.png',                              // 8
    numOfClicks: 3,                                                    // 9
    isSelected: false,                                                 // 10
    divisions: getDivision('haasBioroid', divisionList)                // 11
  }, {                                                                 //
    label: 'Jinteki',                                                  // 13
    name: 'jinteki',                                                   // 14
    imageURL: '/img/corp/sm/Jinteki_Logo.png',                         // 15
    numOfClicks: 3,                                                    // 16
    isSelected: false,                                                 // 17
    divisions: getDivision('jinteki', divisionList)                    // 18
  }, {                                                                 //
    label: 'NBN',                                                      // 20
    name: 'nbn',                                                       // 21
    imageURL: '/img/corp/sm/NBN_Logo.png',                             // 22
    numOfClicks: 3,                                                    // 23
    isSelected: false,                                                 // 24
    divisions: getDivision('nbn', divisionList)                        // 25
  }, {                                                                 //
    label: 'Weyland Consortium',                                       // 27
    name: 'weyland',                                                   // 28
    imageURL: '/img/corp/sm/Weyland_Logo.png',                         // 29
    numOfClicks: 3,                                                    // 30
    isSelected: false,                                                 // 31
    divisions: getDivision('weyland', divisionList)                    // 32
  }];                                                                  //
};                                                                     //
                                                                       //
function getDivision(name, divisionList) {                             // 37
  var divisionID = [];                                                 // 38
  _.each(divisionList.find({ parent: name }).fetch(), function (division) {
    divisionID.push(division._id);                                     // 40
  });                                                                  //
  return divisionID;                                                   // 42
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
