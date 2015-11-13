Template.corpDivisionSelect.onRendered(function() {
    var mask = $('#mask');
    var divisionList = $('.selectList');
    var divisionList_width = 0;
    
    setWidth(divisionList, divisionList_width);
    mouseSlide(divisionList);
    

});

function setWidth(list, listWidth) {
    list.find('li').each(function() {
        listWidth += $(this).width() + 7;
    });

    list.width(listWidth);
}

function mouseSlide(list) {
    var currentMousePos = { // current mouse position set
        x:-1,
        y:-1
    }
    var isInside = false;
    var slide = {
        left: false,
        right: false
    }
    var interval; // interval for sliding
    var movement = 0;
    
    list.mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        //console.log([currentMousePos.x, currentMousePos.y]);
        
        if ($('#mask:hover').length != 0)
            isInside = true;
        else
            isInside = false;
    });
    
    list.mouseover(function() {
        interval = setInterval(function() {
            if (currentMousePos.x >= (list.width()/2 + 75)) {
                slide.left = true; slide.right = false;
                movement -= 2;
            } else if (currentMousePos.x < (list.width()/2 - 225)) {
                slide.right = true; slide.left = false;
                movement += 2;
            } else {
                slide.left = false; slide.right = false;
                movement += 0;
            }
        
            if (isInside)
                $('#mask').scrollLeft(-movement);

        }, 10);
    });
    
    list.mouseout(function() {
        interval = clearInterval(interval);
    });
}