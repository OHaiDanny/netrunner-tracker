Template.runnerFactionSelect.helpers({
   faction:function() {
       return FactionList.find().fetch();
   } 
});