(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/factionSelect.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.runnerFactionSelect.helpers({                                 // 1
   faction: function () {                                              // 2
      return FactionList.find().fetch();                               // 3
   }                                                                   //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);