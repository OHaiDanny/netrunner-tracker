Template.runnerSelect.onRendered(function() {
    var mask = $('#mask');
    var runnerList = $('.selectList');
    var runnerList_width = 0;
    
    if(window.innerHeight < window.innerWidth){
        setWidth(runnerList, runnerList_width);
        mouseSlide(runnerList);
    }
});

Template.runnerSelect.events({
   'click a':function() {
       Meteor.call('runnerSelected', this);
   } 
});
