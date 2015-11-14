Template.corpDivisionSelect.onRendered(function() {
    var mask = $('#mask');
    var divisionList = $('.selectList');
    var divisionList_width = 0;
    
    setWidth(divisionList, divisionList_width);
    mouseSlide(divisionList);
});
//
//Template.divisionSelect.helpers({
//    corp: function() {
//        var division = DivisionList.findOne({_id: this._id});
//        return CorpList.findOne({name: division.parent});
//    }
//});