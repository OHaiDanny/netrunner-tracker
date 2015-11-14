Template.runnerSelect.onRendered(function() {
    var mask = $('#mask');
    var runnerList = $('.selectList');
    var runnerList_width = 0;
    
    setWidth(runnerList, runnerList_width);
    mouseSlide(runnerList);
});