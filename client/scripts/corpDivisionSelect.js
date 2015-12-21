Template.corpDivisionSelect.onRendered(function() {
    var mask = $('#mask');
    var divisionList = $('.selectList');
    var divisionList_width = 0;
    
    if(window.innerHeight < window.innerWidth){
        setWidth(divisionList, divisionList_width);
        //mouseSlide(divisionList);
    }
});

Template.corpDivisionSelect.events({
   'click a': function() {
       Meteor.call('corpSelected', this);
   } 
});
//
//Template.divisionSelect.helpers({
//    corp: function() {
//        var division = DivisionList.findOne({_id: this._id});
//        return CorpList.findOne({name: division.parent});
//    }
//});