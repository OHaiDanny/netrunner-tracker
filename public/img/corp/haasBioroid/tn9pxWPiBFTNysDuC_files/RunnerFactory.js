(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// RunnerFactory.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
RunnerFactory = {};                                                    // 1
                                                                       //
RunnerFactory.create = function () {                                   // 3
    return [{                                                          // 4
        name: "Noise, Hacker Extraordinaire",                          // 5
        parent: "anarch",                                              // 6
        link: 0,                                                       // 7
        isSelected: false                                              // 8
    }, {                                                               //
        name: "Gabriel Santiago, Consumate Professional",              // 10
        parent: "criminal",                                            // 11
        link: 0,                                                       // 12
        isSelected: false                                              // 13
    }, {                                                               //
        name: "Kate 'Mac' McCaffrey, Digital Tinker",                  // 15
        parent: "shaper",                                              // 16
        link: 1,                                                       // 17
        isSelected: false                                              // 18
    }];                                                                //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
