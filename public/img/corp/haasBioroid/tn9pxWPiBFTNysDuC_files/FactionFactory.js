(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// FactionFactory.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
FactionFactory = {};                                                   // 1
                                                                       //
FactionFactory.create = function () {                                  // 3
    return [{                                                          // 4
        label: "Anarch Faction",                                       // 6
        name: 'anarch',                                                // 7
        credits: 5,                                                    // 8
        numOfClicks: 4,                                                // 9
        curentClicks: 0,                                               // 10
        tags: 0,                                                       // 11
        memoryUnit: 0                                                  // 12
    }, {                                                               //
        label: "Criminal Faction",                                     // 14
        name: 'criminal',                                              // 15
        credits: 5,                                                    // 16
        numOfClicks: 4,                                                // 17
        curentClicks: 0,                                               // 18
        tags: 0,                                                       // 19
        memoryUnit: 0                                                  // 20
    }, {                                                               //
        label: "Shaper Faction",                                       // 22
        name: 'shaper',                                                // 23
        credits: 5,                                                    // 24
        numOfClicks: 4,                                                // 25
        curentClicks: 0,                                               // 26
        tags: 0                                                        // 27
    }];                                                                //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
