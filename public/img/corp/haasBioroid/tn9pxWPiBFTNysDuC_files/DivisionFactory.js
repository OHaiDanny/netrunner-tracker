(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// DivisionFactory.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
DivisionFactory = {};                                                  // 1
                                                                       //
DivisionFactory.create = function () {                                 // 3
    return [{                                                          // 4
        label: "Haas-Bioroid: Engineering the Future",                 // 6
        parent: 'haasBioroid',                                         // 7
        imageURL: '/img/corp/haasBioroid/hbetf.png',                   // 8
        badPublicity: 0,                                               // 9
        selected: false                                                // 10
    }, {                                                               //
        label: "Haas-Bioroid: Stronger Together",                      // 12
        parent: 'haasBioroid',                                         // 13
        imageURL: '/img/corp/haasBioroid/hbst.png',                    // 14
        badPublicity: 0,                                               // 15
        selected: false                                                // 16
    }, {                                                               //
        label: "Jinteki: Personal Evolution",                          // 18
        parent: 'jinteki',                                             // 19
        badPublicity: 0,                                               // 20
        selected: false                                                // 21
    }, {                                                               //
        label: "Jinteki: Replicating Perfection",                      // 23
        parent: 'jinteki',                                             // 24
        badPublicity: 0,                                               // 25
        selected: false                                                // 26
    }, {                                                               //
        label: "NBN: Making News",                                     // 28
        parent: 'nbn',                                                 // 29
        badPublicity: 0,                                               // 30
        selected: false                                                // 31
    }, {                                                               //
        label: "NBN: The World Is Yours",                              // 33
        parent: 'nbn',                                                 // 34
        badPublicity: 0,                                               // 35
        selected: false                                                // 36
    }, {                                                               //
        label: "Weyland Consortium: Engineering the Future",           // 38
        parent: 'weyland',                                             // 39
        badPublicity: 0,                                               // 40
        selected: false                                                // 41
    }, {                                                               //
        label: "Weyland Consortium: Because We Built It",              // 43
        parent: 'weyland',                                             // 44
        badPublicity: 0,                                               // 45
        selected: false                                                // 46
    }];                                                                //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
