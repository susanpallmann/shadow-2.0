$(document).ready(function() {
    
    let charWidth = $('#character')[0].getBoundingClientRect().width;
    let charHeight = $('#character')[0].getBoundingClientRect().height;
    let childPos = $('#character').offset();
    let parentPos = $('#character').parent().offset();
    let childOffset = {
        top: (childPos.top + charHeight/4 - parentPos.top)/$('#game')[0].getBoundingClientRect().height,
        left: (childPos.left + charWidth/4 - parentPos.left)/$('#game')[0].getBoundingClientRect().width
    }
    console.log(childOffset.top*100);
    console.log(childOffset.left*100);

    function updateScroll(positionLeft, positionTop) {
        
        var newLeft = ((positionLeft*200)-100)*-1;
        var newTop = ((positionTop*200)-100)*-1;
        
        $('#game').css('left', newLeft + '%');
        $('#game').css('top', newTop + '%');
        
    }
    
    updateScroll(childOffset.left, childOffset.top);
    
});
