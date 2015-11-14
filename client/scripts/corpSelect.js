Template.corpSelect.helpers({
   names:function() {
       return CorpList.find().map(function(corpList) {
           return corpList;
       });
   } 
});